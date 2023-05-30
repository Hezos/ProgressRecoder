export class Show{
    public Name:string = "";
    public Season:number = 0;
    public Episode:number = 0;
    
    constructor(public name: string, public season:number, public episode:number) {
        this.Name = name;
        this.Season = season;
        this.Episode = episode;
    }
}