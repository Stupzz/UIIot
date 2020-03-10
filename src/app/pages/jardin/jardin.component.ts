import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.scss']
})
export class JardinComponent implements OnInit {
  public idBac: any;
  public selectedBac;
  public display = false;
  public listBac: [];
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get('http://192.168.43.233:8080/api/bacs').subscribe(
      value => {
        // @ts-ignore
        this.listBac = value as Array<any>;
      }
    );
  }

  selectBacEvent($event: any) {
    // @ts-ignore
    this.selectedBac = this.listBac.find(it => it.id.toString() === $event.toString());
  }


  goToHistorique() {
    this.router.navigateByUrl('/historique/' + this.idBac);
  }
}
