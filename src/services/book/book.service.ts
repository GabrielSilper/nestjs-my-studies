import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getAll() {
    return 'Hello Books!';
  }
}
