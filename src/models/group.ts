import { ObjectId } from "mongodb";

export default class Group {
    constructor(
        public name: string,
        public students: ObjectId[],
        public activity: ObjectId,
        public _id?: ObjectId
    ) { }
}