import { Component, OnInit, Output } from '@angular/core';
import {Input} from '@angular/core';
import {Product} from 'src/product'
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify =new EventEmitter<Product>();
  @Input() isUnchanged: any;

  constructor() { }

  ngOnInit(): void {
  }
 
  clickChildMe()
  {
    this.notify.emit(this.product)
  }

}
