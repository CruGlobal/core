import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing'
import { Tree, readProjectConfiguration } from '@nrwl/devkit'

import microservice from './microservice'
import { Schema } from './schema'

describe('tools generator', () => {
  let appTree: Tree
  const options: Schema = { name: 'test' }

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await microservice(appTree, options)
    const config = readProjectConfiguration(appTree, 'api-test')
    expect(config.targets.generate).toEqual({
      executor: '@nx-tools/nx-prisma:generate',
      options: { schema: 'apps/api-test/prisma/schema.prisma' }
    })
  })
})
