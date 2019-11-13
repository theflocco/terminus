import { DateDTO } from './dateDTO';

export class Termin {

    constructor(
        public name: String,
        public description: String,
        public startDate: DateDTO,
        public endDate: DateDTO) { }
}