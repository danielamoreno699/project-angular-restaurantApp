import { Component, OnInit, Input, Inject, ComponentFactoryResolver } from '@angular/core';

import { DialogueServiceService } from 'src/app/core/services/dialogue-service.service';

import { Menu } from '../../models/menu.model';

import { combineLatest,  map } from 'rxjs';






@Component({
  selector: 'app-cart-order2',
  templateUrl: './cart-order2.component.html',
  styleUrls: ['./cart-order2.component.css']


})


export class CartOrder2Component  implements OnInit{

  

  public Menu: Menu[] = []
  public dishName = ''; 
  public cost = 0
  public count = 0


  


  constructor(private dialogs: DialogueServiceService) {
       
  }

  
  public  ngOnInit(): void {
   

    combineLatest([
      this.dialogs.cost$,
      this.dialogs.count$,
      this.dialogs.dishName$,
    ]).pipe(
      map(([ Itemcost, Itemcount, ItemdishName ]: [ number, number, string ])  => {
        
        this.cost = Itemcost
        this.count = Itemcount
        this.dishName = ItemdishName

        
      
     }));



     const obj2 :(Menu)= {
      dishName : this.dishName,
      cost:  this.cost,
      count :  this.count
     
      }



  this.getMenu();
  this.removeData(obj2);
  

  }


  public  getMenu(): void{

    this.dialogs.Menu2.subscribe((shoppingItems: Menu[]) => this.Menu = shoppingItems)
    let x = Object.values(this.Menu)
    console.log('valores', x)

    }
    
    public removeData(obj: any){
     
      const index: number = this.Menu.indexOf(obj);
      if (index !== -1) {
        this.Menu.splice(index, 1);
    } 
     }






    

    }










  
  



