import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@app/shared';

import { TrainingRoutingModule } from './training-routing.module';

import { TrainingComponent } from './training/training.component';

import { HowItWorksComponent } from './how-it-works/how-it-works.component';

import { CoursesComponent } from './courses/courses.component';
import { PartnersComponent } from './partners/partners.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    TrainingRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],

  declarations: [
    TrainingComponent,
    HowItWorksComponent,
    CertificatesComponent,
    CoursesComponent,
    PartnersComponent,
    HomeComponent
  ]
})
export class TrainingModule {
  constructor() {}
}

export class ExamplesModule {
  constructor() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/training/`,
    '.json'
  );
}
