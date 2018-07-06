import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//comoposants
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { DetailsBookComponent } from './details-book/details-book.component';

//services
import { LoanService } from './services/loan.service';
import { ListBooksComponent } from './list-books/list-books.component';

const appRoutes: Routes = [
	{ path: 'books', component: ListBooksComponent },
	{ path: 'authors', component: AuthorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BooksComponent,
    AuthorsComponent,
    DetailsBookComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
