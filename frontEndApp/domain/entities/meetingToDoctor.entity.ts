import { DiseaseEntity } from "./disease.entity"

export class MeetingToDoctor {

    constructor() {

    }

    private readonly disease: DiseaseEntity;

    private readonly isHouse: boolean;

    private readonly dateStart: Date;

    private readonly dateEnd: Date;

    private readonly isDischarged: boolean;
}