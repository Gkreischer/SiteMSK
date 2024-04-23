import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../_models/contact';
import { catchError, tap } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  sendMessageWhatsapp(phone: string, message?:Contact) {
    return window.open(`https://api.whatsapp.com/send?phone=${phone}&text=Olá, me chamo ${message?.name}, e-mail: ${message?.email}, telefone: ${message?.phone}, mensagem: ${message?.message}`);
  }
}
