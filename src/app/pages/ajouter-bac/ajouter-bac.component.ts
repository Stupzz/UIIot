import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-bac',
  templateUrl: './ajouter-bac.component.html',
  styleUrls: ['./ajouter-bac.component.scss']
})
export class AjouterBacComponent implements OnInit {

  public idBac: any;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  envoyerFormulaire() {
    this.httpClient.post('http://localhost:8080/api/bacs', this.idBac).subscribe(
      value => {
      }
    );
    this.router.navigateByUrl('/jardin');
  }
}
