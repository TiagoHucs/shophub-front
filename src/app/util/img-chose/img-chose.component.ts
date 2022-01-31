import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'img-chose',
  templateUrl: './img-chose.component.html',
  styleUrls: ['./img-chose.component.css']
})
export class ImgChoseComponent implements OnInit {
  @Input() imgs!: string[];
  @Output() emmiter = new EventEmitter<any>()
  
  constructor() { }

  ngOnInit(): void {
  }

  chose(img:any){
    this.emmiter.emit(img);
  }

}
