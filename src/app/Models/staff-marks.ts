export class StaffMarks {
    private admnNo:number;
    private exam:String;
    private sub:String;
    private mark:number;

    constructor(admnNo:number,exam:String,sub:String,mark:number){
        this.admnNo=admnNo;
        this.exam=exam;
        this.sub=sub;
        this.mark=mark;
    }
}
