export class Staff{
    constructor(
        public id:number,
        public name:string,
        public age:number,
        public gender:string,
        public vacation:Boolean,
        public education?:Education[]
    ){}
}
export class Education{
    constructor(
        public degree?:string,
        public discipline?:string,
        public year?:string
    ){}
}
export const staffs:Staff[] = [
    new Staff(
        1,'Manop',27,'male',false,[
            new Education('Master','MBA','2017'),
            new Education('Bachelor','Engeering','2014')
        ]
    ),
    new Staff(
        1,'Jubjang',30,'female',true,[
            new Education('Bachelor','Accounting','2008')
        ]
    ),    
];
export const degrees =['Bachelor','Master','Doctor'];