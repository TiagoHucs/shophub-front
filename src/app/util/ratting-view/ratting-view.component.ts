import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ratting-view',
  templateUrl: './ratting-view.component.html',
  styleUrls: ['./ratting-view.component.css']
})
export class RattingViewComponent implements OnInit {
  @Input() ratting!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
