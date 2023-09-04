import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
  provideAuth,
} from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Capacitor } from '@capacitor/core';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
        projectId: '',
        appId: '',
        databaseURL: '',
        storageBucket: '',
        apiKey: '',
        authDomain: '',
        messagingSenderId: '',
    }))),
    importProvidersFrom(provideAuth(() => {
        if (Capacitor.isNativePlatform()) {
            return initializeAuth(getApp(), {
                persistence: indexedDBLocalPersistence,
            });
        }
        else {
            return getAuth();
        }
    })),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    provideAnimations(),
    provideAnimations()
],
});
