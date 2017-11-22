# angular study

2017-11-21
 依赖注入

#### How to start this project
```javascript
npm install
npm start
``` 

#### remark
学习内容
1. 什么是依赖注入模式及使用依赖注入的好处
2. 介绍Angular的依赖注入实现：注入器和提供器
3. 注入器的层级关系

依赖注入：Dependency Injection 简称 DI
控制反转：Inversion of Control 简称 IOC


```javascript
var product = new Product();
createShipment(product);
```

<img src="./src/assets/img/inject.jpg"/>
<img src="./src/assets/img/benefit.png" height="300" alt="好处"/>

### 注入器
```javascript
constructor(private productService:ProductService){}
```
### 提供器
```javascript
provider:[ProductService]
provider:[{provide:ProductService,useClass:ProductService}]
provider:[{provide:ProductService,useClass:AnotherProductService}]
provider:[{provide:ProductService,useFactory:()=>{...}}]
```


总结
+ 当提供器声明在app.module.ts，所有组件都可以使用
+ 当提供器声明在组件中时，它只对它自己和它的子组件可用，其他组件不能调用
+ 当声明在块中提供器和声明在组件中提供器具有相同的token时，声明在组件中的提供器会覆盖声明在块中提供器
+ 一般情况下，我们将提供器声明在模块中

## Project-cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
