import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { EventService } from '../event.service'
import { User } from './user'
import { calander } from './calander'

import * as toastr from "toastr";





@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {


  public lineChartData:Array<any> = [
    {data: [44, 59, 80, 81, 56], label: 'Series A'},
    {data: [20, 48, 40, 19, 86], label: 'Series B'},
    {data: [35, 48, 77, 9, 110], label: 'Series C'},
    {data: [40, 48, 77, 9, 100], label: 'Series d'},
    // {data: [50, 48, 77, 9, 100,], label: 'Series e'},
    // {data: [60, 48, 77, 9, 100], label: 'Series f'},
    // {data: [70, 48, 77, 9, 120], label: 'Series g'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
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
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  
  appchart1:number[]= [350, 450, 100];
  appchart2:number[]= [35, 150, 100];
  appchart3:number[]= [120, 50, 10];

  

  displayedColumns: string[] = ['January', 'February', 'March', 'April', 'May'];
  users: User[]=[]
  dataSource: MatTableDataSource<calander>;
  flag:number=0
  UserName:string=''



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:EventService) {

  }

  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.lineChartData);
        
        
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  
     
  
    
  }
perform(){
  console.log('enterd')
  this.dataSource = new MatTableDataSource(this.lineChartData);
        
        
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

}


 public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
    this.perform()


    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  

}

