// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://api.exchangeratesapi.io/v1/latest?access_key=3c13edbb83edbb62d032dfbc75b4ff3f',
  pexelsKey: '563492ad6f9170000100000162d3f9c87060449ab04be10646b49fec',
  pexelsUrl: 'https://api.pexels.com/v1/search?query=',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
