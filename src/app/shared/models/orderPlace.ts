import { Menu } from './menu.model';
import { payment  } from 'src/app/shared/models/user.models';

export interface OrderPlacement{
    feedId: number ,
    dishName:  string[],
    totalCost: number,
    creditCard: number

    


}