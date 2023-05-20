import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs,{EmailJSResponseStatus} from '@emailjs/browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isExpanded: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_o7s0jlv', 'template_usmjp3c', e.target as HTMLFormElement, 'AQti0Uc4nYeocz2Sy')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
       const inputName = document.getElementById("user_name")  as HTMLInputElement |null
       const inputEmail =document.getElementById("user_email") as HTMLInputElement |null
       const inputMessage =document.getElementById("message") as HTMLInputElement |null
       if(inputName !=null)
        console.log(inputName.value);

        if(inputEmail !=null)
          console.log(inputEmail.value);

        if(inputMessage !=null)
          console.log(inputMessage.value);

      }, (error) => {
        console.log(error.text);
      });
  }

  
  constructor(private router: Router) { }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  
}