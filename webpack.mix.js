let mix = require('laravel-mix');
mix.js('resources/js/app.js', 'static/js').setPublicPath('static');

mix.postCss('resources/css/theme.css', 'static/css', [
    require('tailwindcss'),
    require('postcss-nested')
]).options({
    processCssUrls: false
});
