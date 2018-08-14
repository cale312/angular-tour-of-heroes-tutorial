import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alien } from "./alien";
import { ALIENS } from "./mock-aliens";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AlienService {

	getAliens(): Observable<Alien[]> {
		this.messageService.add('AlienService: Fetched Aliens')
		return of(ALIENS);
	}

  constructor(private messageService: MessageService) { }

}
