<?php namespace Anwendungen\Applications;

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
        $applicationFileName = with(new ReflectionClass('\Anwendungen\Applications\ApplicationsServiceProvider'))->getFileName();
        $applicationPath = dirname($applicationFileName);

        $this->loadViewsFrom($applicationPath . '/../views', 'applications');

        include $applicationPath . '/../routes.php';

    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(\Onderdelen\Dashboard\DashboardServiceProvider::class);
        $this->app->register(\Onderdelen\Seneschal\SeneschalServiceProvider::class);
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
