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
        [28, 48, 40, 19, 86, 27, 90]
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType: string = 'line';
    public pieChartType: string = 'pie';
    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];

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