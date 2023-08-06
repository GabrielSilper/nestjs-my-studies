import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import IBook from 'src/interfaces/IBook';
import { BookService } from 'src/services/book/book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAll(): Promise<IBook[]> {
    return this.bookService.findAll();
  }

  @Post()
  @HttpCode(201)
  create(@Body() createBook: Omit<IBook, 'id'>): Promise<IBook> {
    return this.bookService.create(createBook);
  }
}
