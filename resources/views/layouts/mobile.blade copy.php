<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui">
    <meta name="csrf-token" value="{{ csrf_token() }}"/>
    <title>Laravel 9 Vue JS CRUD Example  - Tutsmake</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ asset('mobile/vendor/swiper/swiper.min.css') }}">
    <link rel="stylesheet" href="{{ asset('mobile/css/style.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900" rel="stylesheet"> 
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/>
    <style>
        .bg-light {
            background-color: #eae9e9 !important;
        }
    </style>
</head>
<body>
<div id="app"></div>
<script src="{{ asset('mobile/vendor/jquery/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('mobile/vendor/jquery/jquery.validate.min.js') }}" ></script>
<script src="{{ asset('mobile/vendor/swiper/swiper.min.js') }}"></script>
<script src="{{ asset('mobile/js/jquery.custom.js') }}"></script>
<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>