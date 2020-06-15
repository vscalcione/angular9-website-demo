import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { FeatureBlockComponent } from './about/feature-block/feature-block.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutPageComponent,
    FeatureBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
