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

  sendMessageWhatsapp(phone: string, message?:string) {
    return window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`);
  }
}
