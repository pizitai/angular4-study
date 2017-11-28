# angular study

2017-11-22
 

#### How to start this project
```javascript
npm install
npm start
``` 

#### remark
小结
- 父子组件之间应该避免直接访问彼此的内部，而应该通过输入输出属性来通讯。
- 组件可以通过输出属性发射自定义事件，这些事件可以携带任何你想携带的数据。
- 在没有父子关系的组件直接，尽量使用中间人模式进行通讯。
- 父组件可以在运行时投影一个或多个模版片段到子组件中
- 每个angular组件都提供了一组生命周期钩子，供你在某些特定的事件发生时执行相应的逻辑
- angular的变更检测机制会监控组件属性的变化并自动更新视图。_这个检测非常频繁并且默认是针对整个组件树的_，所以实现相关钩子时要_**慎重**_
- 你可以标记你的组件树中的一个分支，使其被排除在变更检测机制之外。


## AngularProjectPlus

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
