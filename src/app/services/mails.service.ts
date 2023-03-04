import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private http: HttpClient) { }

  sendMail(payload: any) {
    const baseUrl = window.location.origin;
    return this.http.post(`${baseUrl}/.netlify/functions/mail`, payload)
  }
}
