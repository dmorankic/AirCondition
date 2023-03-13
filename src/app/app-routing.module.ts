import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './controller/controller.component';
import { DisplayComponent } from './display/display.component';
import { RotateComponent } from './rotate/rotate.component';

const routes: Routes = [
  {path:'controller',component:ControllerComponent},
  {path:'display',component:DisplayComponent},
  {path:'rotate',component:RotateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
