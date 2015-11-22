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

Route::get('/test-layout', function () {
    return view('applications::test_layout');
});

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {


});

//protected with JWT
$api->version('v1', ['middleware' => 'api.auth'], function ($api) {


});