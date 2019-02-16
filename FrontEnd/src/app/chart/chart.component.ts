import { Component, OnInit,Input,OnChanges } from '@angular/core';
import * as zingchart from  'zingchart'
import * as zingchart1 from  'zingchart'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  public doughnutChartLabels:string[] = ['Sales', 'Stocks', 'Sold'];
  public doughnutChartData:number[] ;
  public doughnutChartType:string = 'doughnut';
  timer:any
  z:number[]=[2,78,99,50]
  @Input() appchart1:any;
  
  
  
  
  constructor() { }

  ngOnInit() {
    console.log(this.appchart1.length)
if(this.appchart1.length>2){
    console.log('effewf',this.appchart1[0])

}
this.perform()
this.timer = setInterval(()=>{
  this.randomize()
 },10000);

  
   
 
  }
  public chartClicked(e:any):void {
    console.log(e);
  
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
  randomize(){

   console.log("con")
    for (let i = 0; i < 4 ; i++) {
      this.z[i]= Math.floor((Math.random() * 100) + 1);
      
      
     }

     console.log('hhibh',this.z[0])
     this.perform()
  }

  perform(){
    var myConfig = {
      layout:"1x4",
      theme:'light',
       "graphset":[
         {
           type:"pie",
           scale:{
             sizeFactor:"60%"
           },title:{
            text:"Load",
           },
           plot:{
             slice:"75%",
             valueBox:{
               visible:false,
               rules:[
                 {
                   rule:'%p === 0',
                   visible:true,
                   placement:'center',
                   fontSize:20,
                   text:'<span style="color:%color">%v%</span>'
                 }  
               ]
             },
           },
           "scale-r":{
             "ref-angle":270
           },
           series:[
             {
               values:[this.z[0]],
               backgroundColor:"#F44336",
               rules:[
                 {
                   rule:"%v < 25",
                   backgroundColor:"#F44336" // Red
                 },
                 {
                   rule:"%v > 25 && < %v 75",
                   backgroundColor:"#FFEB3B" // Yellow
                 },
                 {
                   rule:"%v > 75",
                   backgroundColor:"#4CAF50" // Green
                 }
               ]
             },
             {
               values:[100-this.z[0]],
               backgroundColor:"#BDBDBD" // Grey
             }
           ]
         },
         {
           type:"pie",
           title:{
            text:"Traffic",
           },
           plot:{
             slice:"75%",
             valueBox:{
               visible:false,
               rules:[
                 {
                   rule:'%p === 0',
                   visible:true,
                   placement:'center',
                   fontSize:24,
                   text:'<span style="color:%color">%v%</span>'
                 }  
               ]
             }
           },
           "scale-r":{
             "ref-angle":270
           },
           scale:{
             sizeFactor:"60%"
           },
           series:[
             {
               values:[this.z[1]],
               backgroundColor:"#FFEB3B",
               rules:[
                 {
                   rule:"%v < 25",
                   backgroundColor:"#F44336" // Red
                 },
                 {
                   rule:"%v > 25 && < %v 75",
                   backgroundColor:"#FFEB3B" // Yellow
                 },
                 {
                   rule:"%v > 75",
                   backgroundColor:"#4CAF50" // Green
                 }
               ]
             },
             {
               values:[100-this.z[1]],
               backgroundColor:"#BDBDBD" // Grey
             }
           ]
         },
         {
           type:"pie",
           title:{
            text:"Users",
           },
           plot:{
             slice:"75%",
             valueBox:{
               visible:false,
               rules:[
                 {
                   rule:'%p === 0',
                   visible:true,
                   placement:'center',
                   fontSize:24,
                   text:'<span style="color:%color">%v%</span>'
                 }  
               ]
             }
           },
           scale:{
             sizeFactor:"60%"
           },
           "scale-r":{
             "ref-angle":270
           },
           series:[
             {
               values:[this.z[2]],
               backgroundColor:"#4CAF50",
               rules:[
                 {
                   rule:"%v < 25",
                   backgroundColor:"#F44336" // Red
                 },
                 {
                   rule:"%v > 25 && < %v 75",
                   backgroundColor:"#FFEB3B" // Yellow
                 },
                 {
                   rule:"%v > 75",
                   backgroundColor:"#4CAF50" // Green
                 }
               ]
             },
             {
               values:[100-this.z[2]],
               backgroundColor:"#BDBDBD" // Grey
             }
           ]
         },
         {
          type:"pie",
          title:{
            text:"Ram",
           },
          plot:{
            slice:"75%",
            valueBox:{
              visible:false,
              rules:[
                {
                  rule:'%p === 0',
                  visible:true,
                  placement:'center',
                  fontSize:24,
                  text:'<span style="color:%color">%v%</span>'
                }  
              ]
            }
          },
          scale:{
            sizeFactor:"60%"
          },
          "scale-r":{
            "ref-angle":270
          },
          series:[
            {
              values:[this.z[3]],
              backgroundColor:"#4CAF50",
              rules:[
                {
                  rule:"%v < 25",
                  backgroundColor:"#F44336" // Red
                },
                {
                  rule:"%v > 25 && < %v 75",
                  backgroundColor:"#FFEB3B" // Yellow
                },
                {
                  rule:"%v > 75",
                  backgroundColor:"#4CAF50" // Green
                }
              ]
            },
            {
              values:[100-this.z[3]],
              backgroundColor:"#BDBDBD" // Grey
            }
          ]
        }
       ]
    };
    
    zingchart.render({ 
      id : 'myChart', 
      data : myConfig, 
      height: 400, 
      width: '100%' 
    });
   
  
  }
}
