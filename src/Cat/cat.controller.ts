import { Owner } from './../module/applist/schema/owner.schema';
import { Observable } from 'rxjs';
import { Cat } from './cat.schema';
import { CatService } from './cat.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('all')
  async findAll(): Promise<Cat[]> {
    return await this.catService.findAll();
  }

  @Get(':id')
  public findAllByOwner(@Param('id')id : string) : Observable<Owner[]>{
    return this.catService.findAllByOwner(id)
  }
}
