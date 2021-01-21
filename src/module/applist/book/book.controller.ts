import { BookService } from './book.service';
import { Controller, Get } from "@nestjs/common";

@Controller('book')
export class BookController {
    constructor(private readonly bookService : BookService){}
    @Get('all')
    public findAll(){
        this.bookService.findAll().subscribe(data =>{
            console.log(data[1].author);
            
        });
        return this.bookService.findAll();
    }
    @Get('a')
    public findA(){
        console.log(this.bookService.getA());
        
        return this.bookService.getA();
    }
}