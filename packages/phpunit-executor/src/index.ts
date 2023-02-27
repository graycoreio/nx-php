import { ExecutorContext } from '@nrwl/devkit'
import { exec } from 'child_process'
import { promisify } from 'util'

export default async function phpunitExecutor(
  options: undefined,
  context: ExecutorContext
) {
  console.log('Running PHPUnit Executor...')
  if(context.projectName === undefined) {
    throw Error('projectName must be defined.')
  }

  try {
    const { stderr, stdout } = await promisify(exec)(`vendor/bin/phpunit ${context.workspace?.projects[context.projectName].root}`)
    console.log(stdout)
    console.error(stderr)
    return { success: !stderr }
  } catch (e: any) {
    console.log(e.stdout)
    console.error(e.stderr)
    return { success: false }
  }
}
