import { EmailValidator } from "@angular/forms";

export interface IUserFormData{
token: IUserFormData;

id : number;
fname : string;
lname : string;
email: string;
phone: number;
password: string;
confirmPassword : string;
disclaimer:boolean;  
}

export interface address{

        HouseNo: number;
        city: string;
        state : string; 
        landMark: string

}

export interface payment {

        namePayment: string;
        creditCard: number;
        Month: string;
        year: string ;
        cvv : number }

