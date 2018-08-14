import { Component, OnInit } from '@angular/core';
import { Alien } from "../alien";
import { ALIENS } from '../mock-aliens';
import { AlienService } from "../alien.service";

@Component({
  selector: 'app-aliens',
  templateUrl: './aliens.component.html',
  styleUrls: ['./aliens.component.css']
})
export class AliensComponent implements OnInit {

	aliens: Alien[];

	selectedAlien: Alien;

  constructor(private alienService: AlienService) { }

  ngOnInit() {
    this.getAliens()
  }

  onSelect(alien: Alien): void {
    this.selectedAlien = alien;
  }

  getAliens(): void {
    this.alienService.getAliens().subscribe(aliens => this.aliens = aliens);
  }

}
