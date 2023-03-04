import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MailsService } from '../../services/mails.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnDestroy {
  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  private _destroy$: Subject<boolean> = new Subject();

  constructor (private fb: FormBuilder, private mailsService: MailsService) {}

  sendMail() {
    this.contactForm.markAllAsTouched()
    if (this.contactForm.valid) {
      this.mailsService.sendMail(this.contactForm.value).subscribe({
        next: (res) => alert('Tu mensaje ha sido enviado correctamente. Te contestaremos a la brevedad'),
        error: (error) => console.log('Error al enviar el correo electrónico. Por favor intentá nuevamente. Si el problema persiste, ponete en contacto con el administrador ' + JSON.stringify(error))
      })
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.unsubscribe()
  }

}
