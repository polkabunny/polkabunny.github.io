import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvPageComponent } from './pages/cv-page/cv-page.component';

const routes: Routes = [
  { path: 'cv', component: CvPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
