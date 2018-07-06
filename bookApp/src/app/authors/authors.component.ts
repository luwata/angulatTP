import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

	authors: object = [];

	constructor(private loanService: LoanService) { }

	ngOnInit() {
		this.loanService
			.getAuthors()
			.subscribe( res => {
				this.authors = res;
			});
	}

}
