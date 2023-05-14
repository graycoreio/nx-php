import { ExecutorContext } from '@nrwl/devkit'
import { exec } from 'child_process'
import { promisify } from 'util'
import { PhpUnitOptions, defaultOptions } from './options'

export default async function phpunitExecutor(
  options: PhpUnitOptions,
  context: ExecutorContext
) {
  const opts: PhpUnitOptions = {
    ...defaultOptions,
    ...options,
  }

  console.log('Running PHPUnit Executor...')

  if (context.projectName === undefined) {
    throw Error('projectName must be defined.')
  }

  let command = opts.pharPath + ' ' + `--bootstrap=${opts.bootstrap}`;


  try {
    const { stderr, stdout } = await promisify(exec)(`
      ${command} ${context.workspace?.projects[context.projectName].root}
    `)
    console.log(stdout)
    console.error(stderr)
    return { success: !stderr }
  } catch (e: any) {
    console.log(e.stdout)
    console.error(e.stderr)
    return { success: false }
  }
}
