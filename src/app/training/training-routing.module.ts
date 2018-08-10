import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training/training.component';
import { PartnersComponent } from './partners/partners.component';
import { CoursesComponent } from './courses/courses.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'anms.trainging.menu.home' }
      },
      {
        path: 'partners',
        component: PartnersComponent,
        data: { title: 'anms.trainging.menu.partners' }
      },
      {
        path: 'courses',
        component: CoursesComponent,
        data: { title: 'anms.training.menu.courses' }
      },
      {
        path: 'how-it-works',
        component: HowItWorksComponent,
        data: { title: 'anms.training.menu.how2work' }
      },
      {
        path: 'certificates',
        component: CertificatesComponent,
        data: { title: 'anms.training.menu.certificates' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
