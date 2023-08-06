import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IBook from 'src/interfaces/IBook';

@Injectable()
export class BookService {
  constructor(@InjectModel('books') private bookModel: Model<IBook>) {}

  async create(createBook: Omit<IBook, 'id'>): Promise<IBook> {
    const newBook = await this.bookModel.create({
      ...createBook,
    });
    return newBook;
  }

  async findAll(): Promise<IBook[]> {
    const books = await this.bookModel.find({});
    return books;
  }
}
