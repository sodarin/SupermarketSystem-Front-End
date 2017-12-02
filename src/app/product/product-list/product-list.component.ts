import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product, ProductListService} from "../../service/product/product-list.service";
declare var $: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private product: Product[];
  hasTooltip: boolean = false;

  maxWidth: number;
  private dataId: string[] = [];
  constructor(private products: ProductListService) { }
  ngOnInit() {
    this.product = this.products.getProduct();
    this.maxWidth = $('.table').width()*0.3;

    // $('.tooltipped').tooltip();
    console.log('contet');

  }

  // showTooltip(): void{
  //   if(!this.hasTooltip){
  //     $('.tooltipped').tooltip();
  //     this.hasTooltip = true;
  //   }
  //
  // }

  removeProduct(pro: Product, i: number): void{
    this.product = this.product.filter(it => it != pro );
    console.log(i);
    $('#'+i).tooltip('remove');
  }


}
