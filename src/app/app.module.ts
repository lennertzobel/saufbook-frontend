import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { NavigationComponent } from './template-parts/navigation/navigation.component';
import { ArchiveComponent } from './templates/archive/archive.component';
import { SettingsComponent } from './templates/settings/settings.component';
import { NavigationLinkComponent } from './template-parts/navigation/navigation-link/navigation-link.component';
import { NotFoundComponent } from './templates/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ArchiveComponent,
    SettingsComponent,
    NavigationLinkComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
