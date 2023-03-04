import { Helper } from "../Helper";
import { MeetingToDoctor } from "./meetingToDoctor.entity";


export class ChildEntity {

    constructor(
        name: string,
        family: string,
        surname: string,
        diseasesForever: string[],
        meettingToDoctor: MeetingToDoctor[],
        birthday: string
    ){
        this._name = name,
        this._family = family,
        this._surname = surname,
        this._diseasesForever = diseasesForever,
        this._meettingToDoctor = meettingToDoctor,
        this._birthday = birthday
    }

    private _name: string;

    private _family: string;

    private _surname: string | null;

    private _diseasesForever: string[];

    private _adress: string;

    private _meettingToDoctor: MeetingToDoctor[];

    private _birthday: string;

    get fullName(): string {
        return `${this._family} ${this._name} ${this._surname || ''}`
    }

    get diseasesForever(): string[] {
        return this._diseasesForever
    }

    get adress(): string {
        return this._adress
    }

    get meettingToDoctor(): MeetingToDoctor[] {
        return this._meettingToDoctor
    }

    get age(): number {
        return Helper.calculateAge(this._birthday);
    }

    set name(name: string) {
        this._name = name;
    }

    set family(family: string) {
        this._family = family;
    }

    set surname(surname: string) {
        this._surname = surname;
    }

    set diseases(diseases: string[]) {
        this.diseases = diseases;
    }

    set meettingToDoctor(meettingToDoctor: MeetingToDoctor[]) {
        this._meettingToDoctor = meettingToDoctor;
    }

    set birthday(birthday: string) {
        this._birthday = birthday;
    }

}