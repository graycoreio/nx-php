import { ExecutorContext } from '@nrwl/devkit'
import { exec } from 'child_process'
import { promisify } from 'util'
import { mkdir } from 'node:fs'
import { join } from 'path'
import { PhpBuildOptions } from './options'
import { cp } from 'fs'
import { CopyOptions } from 'fs'

export default async function phpbuildExecutor(
  options: PhpBuildOptions,
  context: ExecutorContext
) {
  console.log('Running PHPBuild Executor...')
  
  try {
    if(context.projectName === null || context.projectName === undefined) {
      throw Error('projectName must be defined.')
    }
  
    if(context.workspace?.projects[<string>context.projectName].root === undefined) {
      throw Error('root must be defined.')
    }

    const outputPath = join(
      options.outputPath || 'vendor', 
      options.outputName || context.projectName.replace('@',''),
    )

    const cpPromise = <(src: string, dest: string, opt: CopyOptions) => Promise<void>><unknown>promisify(cp); 
    
    const { stderr, stdout } = await 
      promisify(mkdir)(outputPath, { recursive: true })
      .then(() => cpPromise(
        context.workspace?.projects[<string>context.projectName].root || '',
        outputPath,
        { recursive: true },
      )
      .then(() => promisify(exec)('composer dump-autoload'))
    )

    console.log(stdout)
    console.error(stderr)
    return { success: !stderr }
  } catch (e: any) {
    console.log(e)
    console.log(e.stdout)
    console.error(e.stderr)
    return { success: false }
  }
}
