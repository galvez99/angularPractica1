export class Task {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public startDate: Date ,
        public endDate: Date,
        public subject: string ,
        public assignedPerson: string,
        public durationTime: number,
        public realTime: number | undefined
    ){}
}
