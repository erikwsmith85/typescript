// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
       apiKey: "AIzaSyAYqY3-JLbo9ny7kiUGYgGlDJDzx9p23yY",
       authDomain: "fieldbook-f4928.firebaseapp.com",
       databaseURL: "https://fieldbook-f4928.firebaseio.com",
       projectId: "fieldbook-f4928",
       storageBucket: "fieldbook-f4928.appspot.com",
       messagingSenderId: "1020763661215"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
