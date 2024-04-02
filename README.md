# MicrofrontendAppShell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

This is the shell app that will hold the contents from another microfrontend https://github.com/coolsurendar/microfrontend-app-content

# Commands used to generate

1. Generate new application
`ng new microfrontend-app-shell`

2. Generate native federation link

`ng add @angular-architects/native-federation --project shell --port 4200 --type dynamic-host
`
3. Replace the value in federation.manifest.json correctly to point your remote repository and name

`{
    "microfrontend-app-content" : "http://localhost:4300/remoteEntry.json"
}`

4. Add the necessary routes to fetch from remote content. Here we are letting know that the component in this route will be lazy loaded  

`export const routes: Routes = [{
  path: '', loadComponent: () =>
    loadRemoteModule('microfrontend-app-content', './Component').then((m) => m.AppComponent),
}];`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
