import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlaces-superiores',
  templateUrl: './enlaces-superiores.component.html',
  styleUrls: ['./enlaces-superiores.component.css']
})
export class EnlacesSuperioresComponent implements OnInit {

  @Input()
  public ruta_btn_lang: string;

  constructor() { }

  ngOnInit(): void {
  }

}
