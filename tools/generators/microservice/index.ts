import {
  convertNxGenerator,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  Tree,
  offsetFromRoot,
  generateFiles,
  formatFiles,
  updateJson
} from '@nrwl/devkit';
import { Schema } from './schema';
import { applicationGenerator } from '@nrwl/node';
import { addPropertyToJestConfig } from '@nrwl/jest';
import { join } from 'path';

export async function microserviceGenerator(tree: Tree, schema: Schema) {
  const { appsDir } = getWorkspaceLayout(tree);

  const appDirectory = schema.directory
    ? `${names(schema.directory).fileName}/${names(`api-${schema.name}`).fileName}`
    : names(`api-${schema.name}`).fileName;
  const appProjectRoot = joinPathFragments(appsDir, appDirectory);

  await applicationGenerator(tree, { ...schema, name: `api-${schema.name}`, unitTestRunner: 'jest' })
  await addPropertyToJestConfig(tree, joinPathFragments(appProjectRoot, 'jest.config.js'), 'setupFilesAfterEnv', ['<rootDir>setupTests.ts'])
  generateFiles(tree, join(__dirname, './templates'), appProjectRoot, {
    tmpl: '',
    name: `api-${schema.name}`,
    root: appProjectRoot,
    offset: offsetFromRoot(appProjectRoot),
  });
  updateJson(tree, joinPathFragments(appProjectRoot, 'tsconfig.app.json'), (pkgJson) => {
    pkgJson.exclude = ["**/*.spec.ts", "setupTests.ts"];
    return pkgJson
  })
  updateJson(tree, joinPathFragments(appProjectRoot, 'tsconfig.spec.json'), (pkgJson) => {
    pkgJson.include = ["**/*.spec.ts", "**/*.d.ts", "setupTests.ts"]
  return pkgJson
  })
  if (!schema.skipFormat) {
    await formatFiles(tree);
  }
}

export default microserviceGenerator
export const microserviceSchematic = convertNxGenerator(microserviceGenerator)