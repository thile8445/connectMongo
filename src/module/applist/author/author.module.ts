import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { AuthorSchema } from './author.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Author', schema: AuthorSchema, collection: 'author' },
    ]),
  ],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
