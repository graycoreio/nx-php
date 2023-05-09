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
    
    addComposerPackagesToGraphBuilderFromPath(builder, 'packages');

    return builder.getUpdatedProjectGraph()
}

export const addComposerPackagesToGraphBuilderFromPath = (builder: any, path: string) => {
    const composerPackages = glob.sync(path + '/*/composer.json').map((file) => JSON.parse(fs.readFileSync(file).toString()));
    console.log(composerPackages);

    for (const composerPackage of composerPackages) {
        if(!composerPackage.require){
            //skip if we have no dependencies.
            continue
        }

        for (const dep of Object.keys(composerPackage.require)) {         
            console.log(dep);   
            builder.addImplicitDependency(composerPackage.name, dep)
        }
    }
}