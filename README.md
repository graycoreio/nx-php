# Nx PHP Plugin

This repository contains packages that together form the [Nx PHP Plugin](https://github.com/graycoreio/nx-php), which adds support for PHP to [Nx](https://nx.dev/getting-started/intro).

## Project

### `@nx-php/composer-plugin`

The `@nx-php/composer-plugin` project provides a plugin for the Composer package manager. It enhances NX's functionality by adding composer-specific commands and hooks, allowing seamless integration with Nx monorepo workflows.

### `@nx-php/phpunit`

The `@nx-php/phpunit` project integrates PHPUnit testing framework into an Nx monorepo. It allows developers to easily write and run unit tests for their PHP projects within the Nx ecosystem.

## Usage

To use the NX PHP Plugin in your Nx monorepo, install the `@nx-php/composer-plugin` package as a dev dependency in your root workspace:

```bash
npm install --save-dev @nx-php/composer-plugin
```

Configure your Nx workspace to include PHP projects. Refer to the documentation of each project for detailed instructions on configuration and usage:

* [@nx-php/phpunit documentation](./packages/composer-plugin/README.md)
* [@nx-php/composer-plugin documentation](./packages/phpunit-executor/README.md)


### License

The `@nx-php` plugins are open-source software licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.



