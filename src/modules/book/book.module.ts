import { Module } from '@nestjs/common';
import { BookService } from '../../services/book/book.service';
import { BookController } from '../../controllers/book/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import bookSchema from 'src/schemas/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'books', schema: bookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
