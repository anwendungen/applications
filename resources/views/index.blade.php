<!DOCTYPE html>
<html ng-app="applications" ng-controller="AppController">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="{!! asset('css/vendor.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/app.css') !!}">
    <link href='//fonts.googleapis.com/css?family=Roboto:500,400' rel='stylesheet' type='text/css'>
    <title ng-bind="title"></title>
    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->
</head>
<body>

<div ui-view="layout"></div>

<script src="{!! asset('js/vendor.js') !!}"></script>
<script src="{!! asset('js/partials.js') !!}"></script>
<script src="{!! asset('js/app.js') !!}"></script>

{{--livereload--}}
@if ( Config::get('app.debug') )
    <script type="text/javascript">
        document.write('<script src="'+ location.protocol + '//' + (location.host.split(':')[0] || 'localhost') +':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
    </script>
@endif
</body>
</html>


{{--
  - index.blade.php
  - Created by anonymoussc on 22/11/15 4:12.
--}}
