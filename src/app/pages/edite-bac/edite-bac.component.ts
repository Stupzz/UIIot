import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {min} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edite-bac',
  templateUrl: './edite-bac.component.html',
  styleUrls: ['./edite-bac.component.scss']
})
export class EditeBacComponent implements OnInit {
  public selectedBac: any;
  public idBac: any;
  public listBac = [];

  public tauxHumiditeVouluMin: any;
  public tauxHumiditeVouluMax: any;
  public tauxLuminositeVouluMin: any;
  public tauxLuminositeVouluMax: any;
  public temperatureVouluMin: any;
  public temperatureVouluMax: any;

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
    this.tauxHumiditeVouluMin = this.selectedBac.tauxHumiditeVoulu[0];
    this.tauxHumiditeVouluMax = this.selectedBac.tauxHumiditeVoulu[1];
    this.tauxLuminositeVouluMin = this.selectedBac.tauxLuminositeVoulu[0];
    this.tauxLuminositeVouluMax = this.selectedBac.tauxLuminositeVoulu[1];
    this.temperatureVouluMin = this.selectedBac.temperatureVoulu[0];
    this.temperatureVouluMax = this.selectedBac.temperatureVoulu[1];
  }

  envoyerFormulaire() {
    const bac = {
      id: this.selectedBac.id,
      // tslint:disable-next-line:max-line-length
      tauxHumiditeVoulu: [Math.min(this.tauxHumiditeVouluMin, this.tauxHumiditeVouluMax), Math.max(this.tauxHumiditeVouluMin, this.tauxHumiditeVouluMax),],
      // tslint:disable-next-line:max-line-length
      tauxLuminositeVoulu: [Math.min(this.tauxLuminositeVouluMin, this.tauxLuminositeVouluMin), Math.max(this.tauxLuminositeVouluMin, this.tauxLuminositeVouluMax)],
      // tslint:disable-next-line:max-line-length
      temperatureVoulu: [Math.min(this.temperatureVouluMin, this.temperatureVouluMax), Math.max(this.temperatureVouluMin, this.temperatureVouluMax)]
    };
    this.httpClient.post('http://localhost:8080/api/bacs/editer', bac).subscribe(
      value => {
      }
    );
    this.router.navigateByUrl('/jardin');
  }
}
