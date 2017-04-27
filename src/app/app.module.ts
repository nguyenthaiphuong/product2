import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './component/home/home.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AuthDialogComponent } from './component/auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './component/login-form/login-form.component';

import { PositionsComponent } from './component/positions/positions.component';
import { PositionFormComponent } from './component/positions/position-form/position-form.component';

import { PositionService } from './component/positions/shared/position.service';
import { DeptListComponent } from './component/dept/dept-list.component';
import { DeptNewComponent } from './component/dept/dept-new.component';
import { DeptShowComponent } from './component/dept/dept-show.component';
import { DeptService } from './service/dept.service';
//import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    PositionsComponent,
    PositionFormComponent,
    PositionsComponent,
    PositionFormComponent,
    DeptListComponent,
    DeptNewComponent,
    DeptShowComponent
    //ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [ PositionService, DeptService, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
