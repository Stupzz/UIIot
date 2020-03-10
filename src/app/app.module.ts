import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AjouterBacComponent} from './pages/ajouter-bac/ajouter-bac.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// For MDB Angular Free
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { EditeBacComponent } from './pages/edite-bac/edite-bac.component';
import { CaptorFormComponent } from './pages/captor-form/captor-form.component';
import { JardinComponent } from './pages/jardin/jardin.component';
import { BacComponentComponent } from './components/bac-component/bac-component.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DatePipe } from '@angular/common';

const appRoute: Routes = [
  {path: 'creer-bac', component: AjouterBacComponent},
  {path: 'editer-bac', component: EditeBacComponent},
  {path: 'send-captor', component: CaptorFormComponent},
  {path: 'jardin', component: JardinComponent},
  {path: 'historique/:id', component: HistoriqueComponent},
  {path: '', redirectTo: '/jardin', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AjouterBacComponent,
    EditeBacComponent,
    CaptorFormComponent,
    JardinComponent,
    BacComponentComponent,
    HistoriqueComponent,
    LineChartComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    WavesModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
