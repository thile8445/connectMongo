import { UpdateAppListDto, CreateAppListDto } from './dto/applist.dto';
import { Observable } from 'rxjs';
import { AppListService } from './applist.service';
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AppList } from './schema/applist.schema';

@Controller('app')
export class AppListController {
  constructor(private readonly appListService: AppListService) {}

  @Get('all')
  public getAll(): Observable<AppList[]> {
    return this.appListService.getAll();
  }
  @Post('update-saveData')
  public update(@Body() update: UpdateAppListDto) {
    return this.appListService.updateSaveData(update.id, update.saveData);
  }
  @Post('create')
  public create(@Body() create: CreateAppListDto) {
    return this.appListService.create(create);
  }
  @Delete(':id')
  public delete(@Query('id') id: string) {
    return this.appListService.delete(id);
  }
}