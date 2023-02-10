import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment.development';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [
    {
      provide: 'environment',
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
