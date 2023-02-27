import { ExecutorContext } from '@nrwl/devkit'
import { exec } from 'child_process'
import { promisify } from 'util'
import { mkdir } from 'node:fs'
import { join } from 'path'
import { PhpBuildOptions } from './options'

export default async function phpbuildExecutor(
  options: PhpBuildOptions,
  context: ExecutorContext
) {
  console.log('Running PHPBuild Executor...')
  
  try {
    if(context.projectName === null || context.projectName === undefined) {
      throw Error('projectName must be defined.')
    }
  
    const outputPath = join(
      options.outputPath || 'vendor', 
      options.outputName || context.projectName.replace('@',''),
    );
    
    const { stderr, stdout } = await promisify(exec)(
      `rsync -r \
        ${context.workspace?.projects[<string>context.projectName].root}/** \
        ${outputPath} \
        --exclude Test
      `
    )
     

    console.log(stdout)
    console.error(stderr)
    return { success: !stderr }
  } catch (e: any) {
    console.log(e.stdout)
    console.error(e.stderr)
    return { success: false }
  }
}
