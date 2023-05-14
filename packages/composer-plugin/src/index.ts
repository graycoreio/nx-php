import {
    ProjectGraph,
    ProjectGraphBuilder,
    ProjectGraphProcessorContext
} from '@nrwl/devkit'

import * as fs from 'fs'

export function processProjectGraph(
    graph: ProjectGraph,
    context: ProjectGraphProcessorContext
): ProjectGraph {
    const builder = new ProjectGraphBuilder(graph)

    Object.keys(context.projectsConfigurations.projects).map((key) => {
        if (context.projectsConfigurations.projects[key].root) {
            addComposerPackagesToGraphBuilderFromPath(
                builder, context.projectsConfigurations.projects[key].root
            );
        }
    });

    return builder.getUpdatedProjectGraph()
}

export const addComposerPackagesToGraphBuilderFromPath = (builder: any, path: string): void => {
    try {
        fs.statSync(path + '/composer.json', { throwIfNoEntry: true })
    }
    catch(e) {
        return
    }
    
    const library = JSON.parse(fs.readFileSync(path + '/composer.json').toString());

    if (!library.require) {
        //skip if we have no dependencies.
        return;
    }

    for (const dep of Object.keys(library.require)) {
        builder.addImplicitDependency(library.name, dep)
    }

    return;
}