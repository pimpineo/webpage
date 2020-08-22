import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {

  @Input() 
  public title: string;

  constructor() {
   }

  ngOnInit(): void {
  }

}
