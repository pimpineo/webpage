import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-en',
  templateUrl: './en.component.html',
  styleUrls: ['./en.component.css']
})
export class EnComponent implements OnInit {

  @Input()
  public ruta: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
