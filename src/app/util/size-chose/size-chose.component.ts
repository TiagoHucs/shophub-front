import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'size-chose',
  templateUrl: './size-chose.component.html',
  styleUrls: ['./size-chose.component.css']
})
export class SizeChoseComponent implements OnInit {
  @Input() sizes!: number[];
  @Output() emmiter = new EventEmitter<any>()
  
  constructor() { }

  ngOnInit(): void {
  }

  chose(size:any){
    this.emmiter.emit(size);
  }

}
