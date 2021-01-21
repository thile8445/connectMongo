import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, Controller } from '@nestjs/common';
import { Cat, CatSchema } from './cat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema, collection: Cat.name },
    ]),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
