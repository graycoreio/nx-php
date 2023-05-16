# Changelog

## [0.2.0](https://github.com/graycoreio/nx-php/compare/v0.1.2...v0.2.0) (2023-05-16)


### ⚠ BREAKING CHANGES

* `@nx-php/phpbuild` no longer exists. The executor `@nx-php/phpbuild:phpbuild` moved to `@nx-php/composer-plugin:build`

### Features

* move `@nx-php/phpbuild` to `@nx-php/composer-plugin` ([9cd8bf0](https://github.com/graycoreio/nx-php/commit/9cd8bf0caba49480efbcabd22c6c4dfc13e3395a))
* **phpunit:** add bootstrap flag to phpunit ([ddc8fa9](https://github.com/graycoreio/nx-php/commit/ddc8fa99638119e350a77f4b310cb2301660e26a))

## [0.1.2](https://github.com/graycoreio/nx-php/compare/v0.1.1...v0.1.2) (2023-05-14)


### Features

* **composer-plugin:** only check project folders ([b5d05d6](https://github.com/graycoreio/nx-php/commit/b5d05d627b4beab87886eae8b8fce632fbfbcabf))
* **phpunit:** add support for variable phpunit path ([cbcbc48](https://github.com/graycoreio/nx-php/commit/cbcbc48d363ec0ff7c7b11a6d5ff54f1ccb9152c))

## [0.1.1](https://github.com/graycoreio/nx-php/compare/v0.1.0...v0.1.1) (2023-05-11)


### Features

* add initial composer plugin ([7b55784](https://github.com/graycoreio/nx-php/commit/7b5578492100a6764389b7c0b46605e594d7e3e3))
* add package for "building" a php package ([16c7554](https://github.com/graycoreio/nx-php/commit/16c7554cb29dd737f6131a3c0b7f480bf917fa25))
* add phpunit executor for running phpunit ([ba943fa](https://github.com/graycoreio/nx-php/commit/ba943fab0f67af7d6782b8d5b0ea3bdc3dd2a94e))
* **composer-plugin:** build plugin outside nx ([5196c3f](https://github.com/graycoreio/nx-php/commit/5196c3f98589485aad3b6e5351ad3f2b5921a4b9))
* **phpbuild:** first version of builder ([89fc392](https://github.com/graycoreio/nx-php/commit/89fc392a79cfa25224dcf40e57836ddb4a53aa16))
* **phpbuild:** rework phpbuild to work without rsync ([3fa54b3](https://github.com/graycoreio/nx-php/commit/3fa54b37b6797493f806d3b9ec900598951cc55f))
