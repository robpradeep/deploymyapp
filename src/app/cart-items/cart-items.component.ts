import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  products = this.cart.getProducts();
  sum!: number;
  newPrice!: number;
  shippingCost=50;
  totalPrice!: number;

  constructor(private cart : CartService) { }

  ngOnInit(): void {
     //subtotal logic scenario 1
     this.updateSum()
    }

    updateSum()
    {
      //subtotal logic scenario 1
      this.sum=0; 
     for(let i=0; i<this.products.length;i++)
     {
         this.sum=this.sum+this.products[i].price;
     }
      this.totalPrice=this.sum+this.shippingCost
    }
    onKey(product,value)
    {
      //product.price=original price
      //value*product.price=new price
      //sum-originalprice+new price
      this.newPrice=value*product.price;
      this.sum=this.sum-product.price+this.newPrice;
      this.totalPrice=this.sum+this.shippingCost;

    }
     //onkey subtotal should update
     
     deleteProduct(product)
     {
       //[0th index slenium],[i index appium]
       //products.splice(1,1)
      const index = this.products.indexOf(product)
      this.products.splice(index,1)
      this.updateSum()
     }
  

}
