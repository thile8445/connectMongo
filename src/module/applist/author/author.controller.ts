import { AuthorService } from './author.service';
import { Controller, Get } from '@nestjs/common';

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService : AuthorService){}
    @Get('all')
    public findAll(){
        return this.authorService.findAll();
    }
}