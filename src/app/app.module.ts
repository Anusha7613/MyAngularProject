import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestComponent} from './testcomponent/test.component';
import {TestExample} from './testcomponent/test.example';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestExample,
    ProductComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
