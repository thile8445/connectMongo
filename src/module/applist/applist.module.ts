import { AppListService } from './applist.service';
import { AppListController } from './applist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppList, AppListSchema } from './schema/applist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AppList.name, schema: AppListSchema, collection: 'app' },
    ]),
  ],
  controllers: [AppListController],
  providers: [AppListService],
})
export class AppListModule {}
