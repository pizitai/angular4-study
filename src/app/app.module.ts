import {AnotherProductService} from './shared/another-product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from "./shared/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // ProductService
    {
    provide:ProductService,
    useFactory:(logger:LoggerService,appConfig) => {
      // return new ProductService(new LoggerService());
      // let logger = new LoggerService();
      // let dev = Math.random() > 0.5;
      if(appConfig.isDev){
        return new ProductService(logger);
      }else{
        return new AnotherProductService(logger);
      }
    },
    deps:[LoggerService,"APP_CONFIG"]
  }
    ,LoggerService,
    {
      // provide: "IS_DEV_ENV", useValue: false
      provide: "APP_CONFIG", useValue: {is_Dev: false}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
    