import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

const API_URI = process.env.DB_URI as string;

@Module({
  imports: [BookModule, MongooseModule.forRoot(API_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
