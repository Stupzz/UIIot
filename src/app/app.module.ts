import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AjouterBacComponent} from './pages/ajouter-bac/ajouter-bac.component';
import {RouterModule, Routes} from '@angular/router';
import {AjouterPlanteComponent} from './pages/ajouter-plante/ajouter-plante.component';

const appRoute: Routes = [
  {path: 'creer-bac', component: AjouterBacComponent},
  {path: 'creer-plante', component: AjouterPlanteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AjouterBacComponent,
    AjouterPlanteComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
