import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
