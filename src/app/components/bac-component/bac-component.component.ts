import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bac-component',
  templateUrl: './bac-component.component.html',
  styleUrls: ['./bac-component.component.scss']
})
export class BacComponentComponent implements OnInit {
  @Input()
  public bac: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.bac);
  }

}
