import { Module } from '@nestjs/common';
import { BookService } from '../../services/book/book.service';
import { BookController } from '../../controllers/book/book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
