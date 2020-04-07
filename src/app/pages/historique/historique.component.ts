import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  public idBac: any;
  public listHistorique;
  public historiqueLoaded = false;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idBac = +params['id'];
      this.httpClient.get(`http://localhost:8080/api/historique/${this.idBac}`).subscribe(
        value => {
          this.listHistorique = value as Array<any>;
          this.historiqueLoaded = true;
        });
    });
  }
}
