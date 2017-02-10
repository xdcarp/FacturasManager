import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
} else {
    if (module['hot']) {
        module['hot'].accept();
        module['hot'].dispose(() => {
            
        });
    }
}
platformBrowserDynamic().bootstrapModule(AppModule);