import { DialogConfComponent } from 'src/app/shared/components/dialog-conf/dialog-conf.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject, find, from, map, observable, Observable, of, Subject} from 'rxjs';
import { Menu } from 'src/app/shared/models/menu.model';





@Injectable({
  providedIn: 'root'
})



export class DialogueServiceService {
    
 

  constructor( ){
   
  }
  private  Menu: Menu[]= []
  private arrayDishes: any[]= []

  private CostCard : any[]= []




  private CostCard$ : Subject<any[]> = new BehaviorSubject<any[]> (this.CostCard)

   private Menu$ : Subject<Menu[]> = new BehaviorSubject<Menu[]>(this.Menu)

   private arrayDishes$ : Subject<Menu[]> = new BehaviorSubject<Menu[]>(this.arrayDishes)



   private feedId: BehaviorSubject<number> = new BehaviorSubject<number>(0);

   private creditCard: BehaviorSubject<number> = new BehaviorSubject<number>(0);

   private total: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  private cost: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private dishName: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private randomGenerator: BehaviorSubject<number> = new BehaviorSubject<number>(0)




  public cost$: Observable<number> = this.cost.asObservable();
  public dishName$: Observable<string> = this.dishName.asObservable();
  public count$: Observable<number> = this.count.asObservable();
  public Menu2 : Observable<Menu[]> = this.Menu$.asObservable()
  public randomGenerator$: Observable<number> = this.randomGenerator.asObservable()
  public costC : Observable<any[]> = this.CostCard$.asObservable()
  public arrayD : Observable<any[]> =this.arrayDishes$.asObservable()

 


  public feedId$: Observable<number> = this.feedId.asObservable();

  public creditCard$: Observable<number> = this.creditCard.asObservable();

  public totalNumber$: Observable<number> = this.total.asObservable();

 
  public setCost(cost: number): void {
    this.cost.next(cost);
  }

  public setDishName(dishName: string): void {
    this.dishName.next(dishName);
  }

  public setCount(count: number): void {
    this.count.next(count);
  }


  public setFeedId(id: number): void{
    this.feedId.next(id)
  }

  public setTotal(total: number): void{
    this.total.next(total)
  }


  public setcreditNumber( credit: number): void{
    this.creditCard.next(credit)
  }

  public setRandomGenerator(randomGenerator: number ): void{
    //this.randomGenerator.next(Math.floor(Math.random() * 100)+1);
    this.randomGenerator.next(randomGenerator)
  }


   
 public addToLocalStorage(dataSTorage: any){

  this.Menu.push(dataSTorage)
  localStorage.setItem( 'completeMenu', JSON.stringify(this.Menu))
 JSON.parse(localStorage.getItem('completeMenu') || '{}')
  

}

public addCostToLS(costLS: any){

  this.CostCard.push(costLS)
  localStorage.setItem( 'completeCost', JSON.stringify(this.CostCard))
  JSON.parse(localStorage.getItem('completeCost') || '{}')



  console.log('arrayCost', this.CostCard)
}


public arrayDsh( dishes: any){
  this.arrayDishes.push(dishes)
  localStorage.setItem('arrayDishes', JSON.stringify(this.arrayDishes))
  JSON.parse(localStorage.getItem('arrayDishes') || '{}')

  console.log('arrayD', this.arrayDishes)

}






}

