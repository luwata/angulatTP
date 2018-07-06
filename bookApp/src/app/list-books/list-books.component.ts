import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

	private books: Book[] = [];

	//Propriété crée pour stocker la valeur de la checkbox
	check_value: boolean = false;
	
	constructor(private loanService: LoanService) { }

	ngOnInit() {
		this.loanService
			.getBooks()
			.subscribe((res: Book[]) => {
				this.books = res;
			});
	}

	isChecked(e){
		this.check_value = e.target.checked;
	}

}
