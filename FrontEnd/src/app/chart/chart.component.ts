import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Sales', 'Stocks', 'Sold'];
  public doughnutChartData:number[] ;
  public doughnutChartType:string = 'doughnut';
  @Input() appchart1:any;
  @Input() appchart2:any;
  @Input() appchart3:any;

  
  
  constructor() { }

  ngOnInit() {
    console.log('this.appchart1',this.appchart1)
    if(this.appchart1){
      this.doughnutChartData=this.appchart1
    }
    else if(this.appchart2){
      this.doughnutChartData=this.appchart2
    }
    else if(this.appchart3){
      this.doughnutChartData=this.appchart3
    }
  }
  public chartClicked(e:any):void {
    console.log(e);
  
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
}
