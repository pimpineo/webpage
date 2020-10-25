import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-es',
  templateUrl: './es.component.html',
  styleUrls: ['./es.component.css']
})
export class EsComponent implements OnInit {

  @Input()
  public ruta: string;

  constructor() { }

  ngOnInit(): void {
  }

}
