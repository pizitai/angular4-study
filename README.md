# angular study

2017-11-23
 

#### How to start this project
```javascript
npm install
npm start
``` 

#### remark
纯HTML表单
- 显示表单项
- 校验用户输入
- 提交表单数据

1. 模版式表单（引入 **FormsModule**）
> 表单的数据模型是通过该组件模版中的相关指令来定义的，因为使用这种方式定义表单的数据模型时，我们会受限于HTML的语法，所以，模版驱动方式只适合用于一些简单的场景。
2. 响应式表单（引入 **ReactiveFormsModule**）
> 使用响应式表单时，你通过编写TypeScript代码而不是HTML代码来创建一个底层的数据模型，在这个模型定义好以后，你使用一些特定的指令，将模版上的html元素与底层的数据模型连接在一起。

_**总结**_
* 不管是那种表单，都有一个对应的数据模型来存储表单的数据。在模版式表单中，数据模型是由angular基于你组件模版中的指令隐式创建的。而在响应式表单中，你通过编码明确的创建数据模型然后将模版上的html元素与底层的数据模型连接在一起
* 数据模型并不是一个任意的对象，它是一个由angular/forms模块中的一些特定的类，如FormControl，FormGroup, FromArray等组成的。在模版式表单中，你是不能直接访问到这些类的
* 响应式表单并不会替你生成HTML，模版仍然需要你自己来编写


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
