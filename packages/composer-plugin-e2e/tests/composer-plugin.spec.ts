import {
  ensureNxProject,
  readFile,
  readJson,
  runNxCommandAsync,
  tmpProjPath,
  updateFile,
} from '@nrwl/nx-plugin/testing';
import * as fs from 'fs';

describe('composer-plugin e2e', () => {
  // Setting up individual workspaces per
  // test can cause e2e runs to take a long time.
  // For this reason, we recommend each suite only
  // consumes 1 workspace. The tests should each operate
  // on a unique project in the workspace, such that they
  // are not dependant on one another.
  beforeAll(async () => {
    ensureNxProject('composer-plugin', 'dist/composer-plugin');

    await fs.cp('testworkspace/packages', tmpProjPath('libs'), { recursive: true }, () => { });
    updateFile('nx.json', (originalContent: string) => {
      const nx = JSON.parse(originalContent);
      nx.plugins = ['composer-plugin'];
      return JSON.stringify(nx);
    });
  });

  afterAll(() => {
    // `nx reset` kills the daemon, and performs
    // some work which can help clean up e2e leftovers
    runNxCommandAsync('reset');
  });

  it('should build php packages in the correct order', async () => {
    await runNxCommandAsync('reset');
    const result = await runNxCommandAsync('graph --file=graph.json');
    const graph: any = readJson('graph.json');

    expect(graph.graph.dependencies['nx-php/non-php-package']).toEqual([]);
    expect(graph.graph.dependencies['nx-php/package-a']).toEqual([]);
    expect(graph.graph.dependencies['nx-php/package-b']).not.toEqual([]);
    expect(graph.graph.dependencies['nx-php/package-c']).not.toEqual([]);
  });
});
