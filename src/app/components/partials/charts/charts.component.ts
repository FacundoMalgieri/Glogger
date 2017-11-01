import { Component } from '@angular/core'
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
    moduleId: module.id,
    templateUrl: 'charts.component.html',
    styleUrls: ['charts.component.css'],
    selector: 'charts'
})

export class ChartsComponent {
    public lineChartData: Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [23, 45, 20, 12, 26, 47, 90]
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType: string = 'line';
    public lineChartColors: Array<any> = [
        /*{ // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }*/
    ];
    public pieChartType: string = 'pie';
    public pieChartLabels: string[] = ['Failed', 'Passed', 'Skipped'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartColors: Array<any> = [
         /*{
            backgroundColor: [
            "red",
            "limegreen",
            "yellow"
          ],
          hoverBackgroundColor: [
            "lightcoral",
            "greenyellow",
            "#F3F36B"
        ]
        }*/];

    public randomizeType(): void {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}