import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public chartType = 'line';
  @Input()
  public listHistorique: [];

  public chartDatasets: Array<any> = [
    {data: [], label: 'Temperature'},
    {data: [], label: 'Humidité'},
    {data: [], label: 'Luminosité'},
  ];

  public chartLabels = [];
  //public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(125, 244, 129, .2)',
      borderColor: 'rgba(17, 119, 45, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };


  constructor(public datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.listHistorique.forEach(element => {
      // @ts-ignore
      this.chartDatasets[0].data += element.temperature;
      // @ts-ignore
      this.chartDatasets[1].data += element.tauxHumidite;
      // @ts-ignore

      this.chartDatasets[2].data += element.tauxLuminosite;
      // @ts-ignore
      this.chartLabels += this.datepipe.transform(element.date, 'yyyy-MM-dd').toString();
    });
    console.log('chartDatasets');
    console.log(this.chartDatasets);
    console.log('chartLabels');
    // this.chartLabels.forEach(elem => {
    //   console.log(elem);
    // });
  }

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }
}
