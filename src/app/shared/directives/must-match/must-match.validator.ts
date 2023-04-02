
import { FormGroup } from '@angular/forms';


export function MustMatch(controlName: string, matchingControlName: string){

    return (form: FormGroup) =>{

        const control = form.controls[controlName];
        const matchingControl = form.controls[matchingControlName];


        if (!control || !matchingControl) {
            
            return null;
          }

          if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return null;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
            return null;
        } else {
            matchingControl.setErrors(null);
            return null;
        }
    }

    }
