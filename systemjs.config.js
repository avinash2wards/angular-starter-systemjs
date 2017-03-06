(function (global) {
    System.config({
        // "map" tells the System loader where to look for things
        map: {
            // our "app" is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
            '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'node_modules/rxjs'
        },
        // "packages" tells the System loader how to load when no filename and/or no extension
        // Because app & rxjs are folder name in above "path" property.
        // so, in those folder we need to tell what extension files systemJS has to load.
        // Angular js modules extension doesnt need to be here because,
        // "path" property for ng js mdules already have .js extension
        packages: {
            app: { // app is folder name
                defaultExtension: 'js'
            },
            rxjs: { // rxja is folder name inside "node_modules"
                defaultExtension: 'js'
            }
        }
    });
})(this);