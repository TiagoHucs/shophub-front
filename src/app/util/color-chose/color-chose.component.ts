import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'color-chose',
  templateUrl: './color-chose.component.html',
  styleUrls: ['./color-chose.component.css']
})
export class ColorChoseComponent implements OnInit {
  colorChosed!:string;
  @Input() colors!: string[];
  constructor() { }

  ngOnInit(): void {
    //this.colorChosed = this.colors[0];
  }

  chose(color:any){
    console.log(color);
    this.colorChosed = color;
  }


}
