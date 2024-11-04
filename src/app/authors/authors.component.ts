import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AuthorsComponent {
  authorId: number = 0;
  authorDetails: Author | null = null;
  errmessage: string = '';

  constructor(private booksService: BooksService) {}

  onSubmit() {
    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (author: Author) => {
        this.authorDetails = author;
        this.errmessage = '';
      },
      error: () => {
        this.authorDetails = null;
        this.errmessage = 'Author is not found! Please try again. ';
      }
    });
  }
}