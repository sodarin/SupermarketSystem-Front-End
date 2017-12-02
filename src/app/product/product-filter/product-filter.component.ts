import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('.collapsible').collapsible({
    //   onClose: function(el) {
    //     alert(el);
    //   }
    // });
  }

}
