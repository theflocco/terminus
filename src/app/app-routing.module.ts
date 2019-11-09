import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminAddComponent } from './termin-add/termin-add.component';


const routes: Routes = [

  {
    path: 'add-termin',
    component: TerminAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
