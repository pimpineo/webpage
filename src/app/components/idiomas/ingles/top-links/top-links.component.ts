import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-links',
  templateUrl: './top-links.component.html',
  styleUrls: ['./top-links.component.css']
})
export class TopLinksComponent implements OnInit {

  @Input()
  public ruta_btn_lang: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
