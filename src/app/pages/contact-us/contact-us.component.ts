import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  @ViewChild('contactFormRef') contactFormRef: ElementRef<HTMLFormElement> | undefined;

  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })


  constructor (private fb: FormBuilder) {}

  sendMail() {
    this.contactForm.markAllAsTouched()
    if (this.contactForm.valid) {
        const formData = new FormData(this.contactFormRef!.nativeElement);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          // @ts-ignore
          body: new URLSearchParams(formData).toString(),
        })
          .then((res) => console.log("Form successfully submitted", res))
          .catch((error) => alert(error));

    }
  }

}
