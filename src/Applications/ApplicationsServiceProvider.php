<?php
/**
 * ApplicationsServiceProvider.php
 * Created by @anonymoussc on 08/12/15 17:07.
 */

namespace Anwendungen\Applications;

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
        $applicationFileName = with(new ReflectionClass('\Anwendungen\Applications\ApplicationsServiceProvider'))->getFileName();
        $applicationPath     = dirname($applicationFileName);

        $this->loadViewsFrom($applicationPath . '/../../resources/views', 'applications');

        include $applicationPath . '/../../routes/api.php';
        include $applicationPath . '/../../routes/web.php';
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(\Componeint\AppFoundation\AppFoundationServiceProvider::class);
        $this->app->register(\Componeint\Seneschal\SeneschalServiceProvider::class);
        $this->app->register(\Componeint\Dashboard\DashboardServiceProvider::class);
        $this->app->register(\Componeint\Posts\PostsServiceProvider::class);
        $this->app->register(\Componeint\Client\ClientServiceProvider::class);
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
