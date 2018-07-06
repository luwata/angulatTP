import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanService } from '../services/loan.service';
import { Book } from '../../model/book.interface';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

	@Input('data') book = {
		id: 0,
		logo: '',
		title: '',
		author: '',
		dateRelease: 0,
		availability: false,
		nbLoan: 0
		id: 0
	};

	
	constructor(private loanService: LoanService) { }

	ngOnInit() {
	}


}
