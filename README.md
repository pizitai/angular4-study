# angular study

2017-11-22
 

#### How to start this project
```javascript
npm install
npm start
``` 

#### remark
多环境

配置文件
- .angular-cli.json
```javascript
"environments": {
    "dev": "environments/environment.ts",
    "test": "environments/environment.test.ts",
    "prod": "environments/environment.prod.ts"
}
```
- 目录 environments 下面建立对应的文件
```shell
├── environment.ts                      // 开发环境  
├── environment.test.ts                 // 测试环境
├── environment.prod.ts                 // 生产环境
```
这三个ts文件里面的对象**属性**要一致
- 运行和测试的命令
package.json 文件中进行配置
```shell
"start": "ng serve --env=prod --proxy-config proxy.conf.json",
"build": "ng build --env=prod",
```
_配置完成后浏览器端就可跑在  开发  测试  生产  三种环境了_



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
