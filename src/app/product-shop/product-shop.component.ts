import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  
  product: Product | any;
  text : string="Add To Cart"
  disabledButton = false;
  submitted = false;

  constructor(private route :ActivatedRoute,private cart :CartService) { }

  ngOnInit(): void {
    //code to retrieve product
    //ActivatedRoute
    //Service can be injected into activated component class by calling its object
    //in constructor -[dependency injection
    const routeParams  =  this.route.snapshot.paramMap;
    const id = Number(routeParams.get("productId"));
    this.product=products.find(product=> product.id ===id);

  }
  addToCart()
  {
    this.disabledButton=true;
    this.text="Added To Cart"
    this.submitted=true;
    this.cart.addProductstoCart(this.product);
  }

}



