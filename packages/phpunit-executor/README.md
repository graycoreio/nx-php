# `@nx-php/phpunit`

The `@nx-php/phpunit` package is a plugin for an [Nx Workspace](https://nx.dev/) that enables you to build PHP packages within a monorepo. With this package, you can easily integrate PHP packages into your existing Nx workspace.

## Getting Started

To start using the `@nx-php/phpunit`, follow these steps:

1. Install the plugin as a development dependency in your Nx workspace:

```bash
npm install --save-dev @nx-php/phpunit
```

2. Add a test target for your project.

::: tip 
You likely need to build before you test. This example highlights using [`@nx-php/phpbuild`](https://github.com/graycoreio/nx-php/tree/main/packages/phpbuild-executor).
:::

```json
{
    "name": "my-org/my-package",
    "$schema": "../../node_modules/nx/schemas/project-schema.json",
    "sourceRoot": "packages/my-package/src",
    "projectType": "library",
    "targets": {
        "build": {
            "executor": "@nx-php/phpbuild:phpbuild",
            "dependsOn": [
                "^build"
            ],
        },
        "test": {
            "executor": "@nx-php/phpunit:phpunit",
            "dependsOn": [
                "build"
            ]
        },
    },
    "tags": []
}

```

3. Run your tests! 

::: tip 
If you've done this correctly, you'll see a build (or many builds) before your test runs!
:::

```bash
npx nx run your-project:test
```