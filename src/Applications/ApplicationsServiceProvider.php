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
        $applicationFileName = with(new ReflectionClass('Applications\ApplicationsServiceProvider'))->getFileName();
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
        $this->app->register(\Tymon\JWTAuth\Providers\JWTAuthServiceProvider::class);
        $this->app->register(\Dingo\Api\Provider\LaravelServiceProvider::class);
        $this->app->register(\Barryvdh\Cors\ServiceProvider::class);

        $this->app->register(\JwtAuth\JwtAuthServiceProvider::class);

        $loader = AliasLoader::getInstance();
        $loader->alias('JWTAuth', \Tymon\JWTAuth\Facades\JWTAuth::class);
        $loader->alias('JWTFactory', \Tymon\JWTAuth\Facades\JWTFactory::class);

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
