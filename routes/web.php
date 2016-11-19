<?php
/**
 * web.php
 * Created by anonymoussc on 11/19/2016 1:36 AM.
 */

Route::get('/', [
    'as'   => 'home',
    'uses' => 'Anwendungen\Applications\Controllers\ApplicationsController@appStart',
]);

Route::get('/unsupported-browser', [
    'as'   => 'app.unsupported',
    'uses' => 'Anwendungen\Applications\Controllers\ApplicationsController@appUnsupported',
]);
