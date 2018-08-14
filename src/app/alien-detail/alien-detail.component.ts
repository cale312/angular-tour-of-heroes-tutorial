import { Component, OnInit, Input } from '@angular/core';
import { Alien } from "../alien";


@Component({
  selector: 'app-alien-detail',
  templateUrl: './alien-detail.component.html',
  styleUrls: ['./alien-detail.component.css']
})
export class AlienDetailComponent implements OnInit {

	@Input() alien: Alien;

  constructor() { }

  ngOnInit() {
  }

}
