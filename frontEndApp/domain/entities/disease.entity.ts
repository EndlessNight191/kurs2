export type typeDesease = "инфекционные" | "дефицитные" | "наследственные" | "физиологические";

export class DiseaseEntity {

    constructor(title: string, typeDesease: typeDesease, isCured?: boolean) {
        this._title = title,
        this._typeDesease = typeDesease,
        this._isCured = isCured || false
    }

    private _title: string;

    private _typeDesease: typeDesease;

    _isCured: boolean;

    set isCured(isCured: boolean) {
        this._isCured = isCured;
    }
}