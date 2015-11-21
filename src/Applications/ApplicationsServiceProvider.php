<?php namespace Applications;

use ReflectionClass;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class ApplicationsServiceProvider extends ServiceProvider
{

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        // Find path to the package
        $applicationsFileName = with(new ReflectionClass('Applications\ApplicationsServiceProvider'))->getFileName();
        $applicationsPath = dirname($applicationsFileName);

        $this->loadViewsFrom($applicationsPath . '/../views', 'Applications');

        include $applicationsPath . '/../routes.php';

    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

}
