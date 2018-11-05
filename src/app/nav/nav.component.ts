import { Component, OnInit } from '@angular/core';
import {TokenStorage} from '../services/token.storage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public tokenStorage: TokenStorage) { }

  ngOnInit() {

  }



}
