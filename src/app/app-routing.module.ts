import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DeptListComponent} from "./component/dept/dept-list.component";
import {DeptNewComponent} from "./component/dept/dept-new.component";
import {DeptShowComponent} from "./component/dept/dept-show.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  // { path: 'positions', component: PositionsComponent},
  // { path: 'positions/new', component: PositionFormComponent},
  // { path: 'positions/:id', component: PositionFormComponent },
  // { path: 'positions/:id/edit', component: PositionFormComponent }
   { path: 'depts/new', component: DeptNewComponent},
   { path: 'depts', component: DeptListComponent },
   { path: 'depts/:id', component: DeptShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes)