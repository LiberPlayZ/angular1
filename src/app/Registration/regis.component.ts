import  {Component} from '@angular/core'
import { FormBuilder,FormsModule,FormGroup,Validators,  AbstractControl,ValidatorFn,ValidationErrors } from '@angular/forms'
import { environment } from 'src/environments/environment';

@Component({
    selector:'app-regis',
    templateUrl: './regis.component.html',
    styleUrls:['./regis.component.css']

})
export class RegisComponent{
    myForm:FormGroup;
    constructor (private formBuilder:FormBuilder){
        this.myForm=this.formBuilder.group({
        Uname: ['',Validators.required],
        pwd:['',[Validators.required,Validators.minLength(6),this.hasCapitalLetterValidator]],
        pwdCheck: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]]
        },{validator:this.passwordMatchValidator });
    }
   




onSubmit(){
    if(this.myForm.valid){
        console.log(this.myForm.value);
        alert("Form submitted successfully! ");
        
    
        this.myForm.reset();
    }
    else if(this.myForm.hasError('passwordMismatch')){
        alert("Password do not match");
    }
    else{
        alert("Pls fill in all required fields");
    }

}

passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('pwd');
    const confirmPassword = control.get('pwdCheck');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }

    return null;
  }


  hasCapitalLetterValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
  
    if (!/[A-Z]/.test(password)) {
      return { noCapitalLetter: true };
    }
  
    return null;
  };
  




}