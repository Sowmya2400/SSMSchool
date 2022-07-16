export class StaffView {
    private standard:number;
    private section:String;
    private exam:String;
    private sub:String;

    constructor(standard:number,section:String,exam:String,sub:String){
        this.standard=standard;
        this.section=section;
        this.exam=exam;
        this.sub=sub;
    }
}
