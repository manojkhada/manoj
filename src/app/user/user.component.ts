 import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class ItemDetailComponent  {
  @Input() item :'string';
  constructor() { }

  ngOnInit(): void {
  }

}
