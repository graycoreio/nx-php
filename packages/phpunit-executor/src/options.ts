/**
 * These are the options that are available to the phpunit executor/
 */
export interface PhpUnitOptions {
    /**
     * The path to the phpunit executable. By default, this is:
     * `'./vendor/bin/phpunit' from the *workspace* root`
     */
    pharPath: string;

    /**
     * The path to the bootstrap script. By default, this is:
     * `'./vendor/autoload.php' from the *workspace* root`
     */
    bootstrap: string;
}

export const defaultOptions: PhpUnitOptions = {
    pharPath: './vendor/bin/phpunit',
    bootstrap: './vendor/autoload.php',
}