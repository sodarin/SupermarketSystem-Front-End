import { Injectable } from '@angular/core';

@Injectable()
export class ProductListService {

  constructor() { }

  products = [
    new Product("20154914", "陈子康一条", 0.99, "1 seconds", false),
    new Product("20154961", "李瀚芃一粒", 0.99, "7 seconds", true),
    new Product("20155075", "田野一丝", 0.99, "1 seconds", false),
    new Product("548742313261", "豆本豆 纯豆奶 无糖 250ml", 0.99, "1 seconds", false),
    new Product("1751", "牛肉煲加变态辣加两份鸭血加一份青菜", 0.99, "1 seconds", false)
  ];

  getProduct(): Product[]{
    return this.products;
  }

}
export class Product{
  constructor(
    public barCode:string,
    public name: string,
    public price: number,
    public shelfLife: string,
    public refundable: boolean
  ){}
}
