import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-promocion',
  templateUrl: './producto-promocion.component.html',
  styleUrls: ['./producto-promocion.component.css']
})
export class ProductoPromocionComponent implements OnInit {
  @Input() imgURL: string;
  @Input() descripcion: string;
  @Input() precio: number;

  constructor() { }

  ngOnInit(): void {
  }

}
