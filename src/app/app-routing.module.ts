import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArraysComponent } from './copy-array/arrays/arrays.component';

const routes: Routes = [
    {path:'arrays', component: ArraysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
