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
