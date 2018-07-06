import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

	//Propriétés

	private urlServer: string = 'http://localhost:5000';

	constructor(private http: HttpClient) { }

	//Méthodes

	getAuthors(){
		return this.http.get(this.urlServer + '/authors/');
	}

	getBooks(){
		return this.http.get(this.urlServer + '/books/');
	}

}

