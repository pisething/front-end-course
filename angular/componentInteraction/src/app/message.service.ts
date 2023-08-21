import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messageSource = new Subject<string>();
  message$ = this._messageSource.asObservable();

  constructor() { }

  sendMessage(text: string){
    this._messageSource.next(text);
  }

}
