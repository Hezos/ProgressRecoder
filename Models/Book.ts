export class Book{
    public Page: number = 0;
    public Name: string = "";
    public pageCount: number = 0;
    public constructor( page: number,  name: string){
        this.Page = page;
        this.Name = name;
    }
    
}