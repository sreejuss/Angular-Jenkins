export interface ITimesheet {

    id:number;
    empid:number;
    name:string;
    tdate:Date;
    start:TimeRanges;
    end:TimeRanges;
    totalhours:number;


}
