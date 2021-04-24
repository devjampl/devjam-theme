let mix = require('laravel-mix');

mix
    .js('src/scripts/app.js', 'static/app.min.js')
    .sass('src/styles/theme.scss', 'static/app.min.css')
    .options({
        processCssUrls: false
    });
