import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Owner, OwnerSchema } from './../applist/schema/owner.schema';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Owner.name, schema: OwnerSchema, collection: 'owner' },
    ]),
  ],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
