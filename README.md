# DhTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Projec specific architecture

### Pages
Both the `login` and `encode` pages are located in the `/app/pages` directory, and have their own modules and routing modules. This is to enable code scalability and sub-routes, if the project grew beyond the current scope.

### NgRx
The `/app/reducers`, `/app/actions`, and `/app/app.state.ts` are all parts of the common NgRx structure. NgRx is currently used only for the storing of the authorization token.

### Interceptors
Two request interceptors are currently implemented, the `default-headers.interceptor` and `token.interceptor`. The former sets the default headers we want on all our requests, and the latter sets the authorization token header on all requests except ones that go to the `/login` endpoint.

### Guards
Route guarding was implemented via the `authGuard`, applied to the `/encode` route. It checks for a valid token in the NgRx store; if not found, redirects the user to the `/login` route.