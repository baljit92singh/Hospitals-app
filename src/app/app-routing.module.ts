import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'patient' },
  { path: 'patient', component: HomeComponent },
  { path: 'doctor', component: ListComponent },
  { path: '**', redirectTo: 'patient' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
