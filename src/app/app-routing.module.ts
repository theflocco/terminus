import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminAddComponent } from './termin-add/termin-add.component';
import { TerminShareViewComponent } from './termin-share-view/termin-share-view.component';


const routes: Routes = [

  {
    path: 'add-termin',
    component: TerminAddComponent
  },
  {
    path: 'share-termin',
    component: TerminShareViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
