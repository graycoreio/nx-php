import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['src/index.ts'],
    tsconfig: 'tsconfig.lib.json',
    format: 'cjs',
    platform: 'node',
    external: ['@nrwl/devkit'],
    bundle: true,
    outdir: '../../dist/composer-plugin'
})