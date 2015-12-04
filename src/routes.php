<?php
/**
 * Created by anonymoussc on 22/11/15 5:03.
 */

Route::get('/', function () {
    return view('applications::index');
});

Route::get('/unsupported-browser', function () {
    return view('applications::unsupported_browser');
});

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
    $api->post('authenticate', 'App\Http\Controllers\AuthenticateController@authenticate');
});

// Protected with JWT
$api->version('v1', ['middleware' => 'api.auth'], function ($api) {
    $api->get('authenticate', 'App\Http\Controllers\AuthenticateController@index');
    $api->get('authenticate/user', 'App\Http\Controllers\AuthenticateController@getAuthenticatedUser');
});
