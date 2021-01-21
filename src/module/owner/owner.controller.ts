import { Observable } from 'rxjs';
import { Controller, Get } from '@nestjs/common';
import { Owner } from './../applist/schema/owner.schema';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get('all')
  public findAll(): Observable<Owner[]> {
    return  this.ownerService.findAll();
  }
}
