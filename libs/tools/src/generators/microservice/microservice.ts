import {
  convertNxGenerator,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  Tree,
  offsetFromRoot,
  generateFiles,
  formatFiles,
  updateJson,
  updateProjectConfiguration,
  readProjectConfiguration
} from '@nrwl/devkit'
import { Schema } from './schema'
import { applicationGenerator } from '@nrwl/node'
import { addPropertyToJestConfig } from '@nrwl/jest'
import { join } from 'path'

export async function microserviceGenerator(
  tree: Tree,
  schema: Schema
): Promise<void> {
  const { appsDir } = getWorkspaceLayout(tree)
  const formattedNames = names(`api-${schema.name}`)
  const appDirectory = schema.directory
    ? `${names(schema.directory).fileName}/${formattedNames.fileName}`
    : formattedNames.fileName
  const appProjectRoot = joinPathFragments(appsDir, appDirectory)

  await applicationGenerator(tree, {
    ...schema,
    name: `api-${schema.name}`,
    unitTestRunner: 'jest'
  })
  await addPropertyToJestConfig(
    tree,
    joinPathFragments(appProjectRoot, 'jest.config.js'),
    'setupFilesAfterEnv',
    ['<rootDir>setupTests.ts']
  )
  generateFiles(tree, join(__dirname, './templates'), appProjectRoot, {
    tmpl: '',
    name: formattedNames.name,
    root: appProjectRoot,
    offset: offsetFromRoot(appProjectRoot)
  })
  updateJson(
    tree,
    joinPathFragments(appProjectRoot, 'tsconfig.app.json'),
    (pkgJson) => {
      pkgJson.exclude = ['**/*.spec.ts', 'setupTests.ts']
      return pkgJson
    }
  )
  updateJson(
    tree,
    joinPathFragments(appProjectRoot, 'tsconfig.spec.json'),
    (pkgJson) => {
      pkgJson.include = ['**/*.spec.ts', '**/*.d.ts', 'setupTests.ts']
      return pkgJson
    }
  )
  const appConfig = readProjectConfiguration(tree, formattedNames.name)
  updateProjectConfiguration(tree, formattedNames.name, {
    ...appConfig,
    targets: {
      ...appConfig.targets,
      generate: {
        executor: '@nx-tools/nx-prisma:generate',
        options: {
          schema: `${appProjectRoot}/prisma/schema.prisma`
        }
      },
      migrations: {
        executor: '@nx-tools/nx-prisma:migrations',
        options: {
          schema: `${appProjectRoot}/prisma/schema.prisma`
        }
      },
      codegen: {
        executor: '@nrwl/workspace:run-commands',
        options: {
          commands: [
            {
              command: `npx graphql-codegen --config ${appProjectRoot}/codegen.yml`
            }
          ]
        }
      }
    }
  })
  if (!schema.skipFormat) {
    await formatFiles(tree)
  }
}

export default microserviceGenerator
export const microserviceSchematic = convertNxGenerator(microserviceGenerator)
