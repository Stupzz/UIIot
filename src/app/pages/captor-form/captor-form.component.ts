import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-captor-form',
  templateUrl: './captor-form.component.html',
  styleUrls: ['./captor-form.component.scss']
})
export class CaptorFormComponent implements OnInit {
  public selectedBac: any;
  public idBac: any;
  public listBac = [];

  public tauxHumidite: any;
  public tauxLuminosite: any;
  public temperature: any;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/api/bacs').subscribe(
      value => {
        this.listBac = value as Array<any>;
      }
    );
  }

  selectBacEvent($event: any) {
    this.selectedBac = this.listBac.find(it => it.id.toString() === $event.toString());
    this.changeValue();
  }

  changeValue() {
    this.tauxHumidite = this.selectedBac.tauxHumidite;
    this.tauxLuminosite = this.selectedBac.tauxLuminosite;
    this.temperature = this.selectedBac.temperature;
  }

  envoyerFormulaire() {
    const captor = {
      id: this.selectedBac.id,
      tauxHumidite: this.tauxHumidite,
      tauxLuminosite: this.tauxLuminosite,
      temperature: this.temperature
    };

    this.httpClient.post('http://localhost:8080/api/bacs/capteur', captor).subscribe(
      value => {
      }
    );
    this.router.navigateByUrl('/jardin');

  }
}
