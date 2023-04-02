import { Pipe, PipeTransform } from '@angular/core';

import { FoodList } from '../models/foodlist.model';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {

  transform(restaurant: FoodList[], searchRestaurant:string): FoodList[] {

    if(restaurant.length === 0 || searchRestaurant=== ''){
      return restaurant;
    }
    
    
    searchRestaurant = searchRestaurant.toLowerCase();

       return restaurant.filter(restaurant =>{
         if(restaurant && restaurant.restaurant )
          
          {
           return restaurant.restaurant.toLowerCase().includes(searchRestaurant);
              
         }

         return false;

         })
       }
  }
