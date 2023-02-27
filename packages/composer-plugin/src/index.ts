import {
    ProjectGraph,
    ProjectGraphBuilder,
    ProjectGraphProcessorContext
} from '@nrwl/devkit'

import * as glob from 'glob'
import * as fs from 'fs'

export function processProjectGraph(
    graph: ProjectGraph,
    context: ProjectGraphProcessorContext
): ProjectGraph {
    const builder = new ProjectGraphBuilder(graph)


    addComposerPackagesToGraphBuilderFromPath(builder, 'libs')
    addComposerPackagesToGraphBuilderFromPath(builder, 'magento2/app/code')

    return builder.getUpdatedProjectGraph()
}

export const addComposerPackagesToGraphBuilderFromPath = (builder: any, path: string) => {
    const composerPackages = glob.sync(path + '**/**/composer.json').map((file) => JSON.parse(fs.readFileSync(file).toString()))
    for (const composerPackage of composerPackages) {
        if(!composerPackage.require){
            //skip if we have no dependencies.
            continue
        }

        const ignoredDeps = [
            'magento/framework',
            'magento/framework-amqp',
            'magento/framework-message-queue',
            'magento/framework-bulk',
            'magento/magento-composer-installer'
        ]
        for (const dep of Object.keys(composerPackage.require)) {
            if(ignoredDeps.includes(dep)){
                continue
            }
            // const packageFiles = glob.sync(path + getProjectPath(composerPackage) + '**/**', { nodir: true}); //This is probably overly "watchy", we could trim out markdown, etc.
            
            if(dep.includes('magento')){
                builder.addImplicitDependency(composerPackage.name, dep)
            }
            // for(const file of packageFiles){
                
            // }
        }
    }
}

export const getProjectPath = (packageRef: any): string => {
    if(packageRef.name.includes('magento')){
        const path = Object.keys(packageRef?.autoload['psr-4'])[0].replace('\\', '/').replace('\\', '/')
        return '/' + path
    }
    return packageRef.name.replace('demo-nx-php', '')
}