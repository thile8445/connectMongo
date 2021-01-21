import { BookModule } from './module/applist/book/book.module';
import { AuthorModule } from './module/applist/author/author.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './Cat/cat.module';
import { AppListModule } from './module/applist/applist.module';
import { OwnerModule } from './module/owner/owner.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/work_flow'),
    CatModule,
    AppListModule,
    OwnerModule,
    AuthorModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
