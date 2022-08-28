# AngularJavaToDoProject
## Commands
- npm install -g @angular/cli --> install angular CLI
- ng new todo       --> making angular project via angular cli, here "todo" is project name
- ng serve          --> run project - After every change it will automatically reflect changes on port 4200
- "ng": "ng",
- "start": ng serve
- "build": ng build
- "test": ng test
- "lint": ng lint
- "e2e": ng e2e


## Creating component using Angular CLI
- ng generate component welcome  --> here WELCOME is the component name
- ng g c welcome

## Data Binding 3 methods

- username : {{username}}    -->> Interpolation --> Ties up view to the value of property i.e username
- (click) = handleLogin      -->> Event Binding --> On user button click  --> bind view event to component event method
- [(ngModel)] = "username"   -->> Two way binding method --> we have to put property name from compnent i.e. username
    [()]     -->>> banana in box symbol
    ngModel  -->>> it is called Angular Directives, it has additional meaning on top of HTML
 