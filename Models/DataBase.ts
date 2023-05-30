import { Book } from "./Book";
import { Show } from "./Show";

export class DataBase{
    public books:Array<Book> = [];
    public shows:Array<Show> = [];
    constructor() 
    {
       //Itt olvas ki adatot.         
    }

     public ReadData(fileName: string): void {
        Data: String;

    }

    public FileWriteF(): void{
        var RNFS = require('react-native-fs');
         var path: string = RNFS.DocumentDirectoryPath + '/test.txt';
         RNFS.writeFile(path, 'Data goe here.', 'utf8');
       }

       public FileReadF(): void{
        var RNFS: any = require('react-native-fs');
        var path: string = RNFS.DocumentDirectoryPath;
      
        RNFS.readDir(path).then((result: any) => {
          console.log('GOT RESULT', result);
          return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult: any) => {
          if (statResult[0].isFile()) {
            // if we have a file, read it
            return RNFS.readFile(statResult[1], 'utf8');
          }
      
          return 'no file';
        })
        .then((contents: string) => {
          // log the file contents
          console.log(contents);
        });
      
      }

    public WriteDate(fileName: string): void{
        Data:String;
    }
}