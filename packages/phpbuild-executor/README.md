# `@nx-php/phpbuild`

The `@nx-php/phpbuild` package is a plugin for an [Nx Workspace](https://nx.dev/) that enables you to build PHP packages within a monorepo. With this package, you can easily integrate PHP packages into your existing Nx workspace.

## Getting Started

To start using the `@nx-php/phpbuild`, follow these steps:

1. Install the plugin as a development dependency in your Nx workspace:

```bash
npm install --save-dev @nx-php/phpbuild
```

2. Add a build target for your project.

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
            ]
        }
    },
    "tags": []
}

```

3. Run a build! 

```bash
npx nx run your-project:build
```

4. See the output in `vendor/

```bash
ls -Al vendor/my-org/my-package
```

5. Add your package to `composer.json` autoloader

```json
{
    "name": "my-org/monorepo",
    "autoload": {
        "psr-4": {
            "MyOrg\\MyProject\\": "vendor/my-org/my-project",
        }
    },
    "require": {}
}
```
