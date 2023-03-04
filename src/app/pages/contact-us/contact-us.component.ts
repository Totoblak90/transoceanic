import { Component, OnDestroy, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MailsService } from '../../services/mails.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnDestroy, AfterViewInit {

  @ViewChild('infoSection') infoSection: ElementRef<HTMLDivElement> | undefined;

  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  private _destroy$: Subject<boolean> = new Subject();

  constructor (private fb: FormBuilder, private mailsService: MailsService, private utilitiesService: UtilitiesService) {}


  ngAfterViewInit(): void {
    this.adjustSize()
  }

  @HostListener('window:resize')
  onRezise() {
    this.adjustSize()
  }


  adjustSize() {
    if (this.infoSection) {
      if (window.innerWidth < 960) {
        this.infoSection.nativeElement.style.height = (window.innerHeight - this.utilitiesService.headerHeightMobile - this.utilitiesService.footerHeightMobile) / 10 + 'rem';
      } else {
          this.infoSection.nativeElement.style.height = (window.innerHeight - this.utilitiesService.headerHeightDesktop - this.utilitiesService.footerHeightDesktop) / 10 + 'rem';
      }
    }
  }

  sendMail() {
    this.contactForm.markAllAsTouched()
    if (this.contactForm.valid) {
      this.mailsService.sendMail(JSON.stringify(this.contactForm.value)).subscribe({
        next: (res) => alert('Tu mensaje ha sido enviado correctamente. Te contestaremos a la brevedad'),
        error: (error) => alert('Error al enviar el correo electrónico. Por favor intentá nuevamente. Si el problema persiste, ponete en contacto con el administrador ' + JSON.stringify(error))
      })
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.unsubscribe()
  }

}
