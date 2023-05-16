# `@nx-php/composer-plugin`

The Nx PHP Package Plugin is a plugin for an [Nx Workspace](https://nx.dev/) that enables computation of the PHP package graph from `composer.json` `require` and `require-dev` within a monorepo structure. With this plugin, you can integrate PHP packages into your existing Nx workspace without having to manually specify dependencies between your project.

## Getting Started

To start using the `@nx-php/composer-plugin`, follow these steps:

1. Install the plugin as a development dependency in your Nx workspace:

```bash
npm install --save-dev @nx-php/composer-plugin
```

2. Add the plugin to your workspace's `nx.json`

```json
{
    "$schema": "./node_modules/nx/schemas/nx-schema.json",
    "npmScope": "my-project",
    "tasksRunnerOptions": {
        "default": {
            "runner": "nx/tasks-runners/default",
            "options": {
                "cacheableOperations": [
                    "build",
                    "lint",
                    "test",
                    "e2e"
                ]
            }
        }
    },
    "targetDefaults": {
        "build": {
            "dependsOn": [
                "^build"
            ]
        }
    },
    "plugins": [
        "@nx-php/composer-plugin" //This is the important line!
    ]
}
```

3. Start developing your PHP package!

> You will likely need the [`@nx-php/phpunit`](../phpunit-executor/README.md) package in order to test your plugin.