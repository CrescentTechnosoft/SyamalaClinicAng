export interface Response {
    years: Array<string>,
    opNos: Array<OPNo>,
    data: ResponseDatas,
    medicines: Array<string>,
    investigations: Array<string>,
    treatments: Array<string>,
    prescriptions: Prescription,
    complaints:Array<string>,
    medicineDatas:Array<MedicineData>
}

export interface OPNo {
    id: number,
    opNo: number,
    name:string,
}

export interface ResponseDatas {
    pt_id: string,
    name: string,
    age: string,
    gender: string,
    contact: string,
    consultant: string,
    diagnosis: string,
    treatment: string,
    complaint:string,
    reason: string,
    height: string,
    weight: string,
    bsa: string,
    bp: string,
    pulse: string,
    status: string,
    opinion: string,
    patient_info: string,
    medicine: string,
    fType: string,
    dosage: string,
    days: number,
    remark:string,
    is_saved: boolean,
    temp:string,
    spo2:string,
    past:string,
    rbs:string,
    allergies:string,
    general:string,
    address:string,
}

export interface Prescription {
    medicines: Array<MedicineData>,
    investigations: Array<string>,
    treatments: Array<string>
}

export interface MedicineData {
    medicine: string,
    type: string,
    dosage:string,
    period:string,
    days: number,
    qty:string,
    remark
}

export interface Inputs {
    year: string,
    id: string,
    prYear:string,
    prId:string,
    ptId: string,
    name: string,
    age: string,
    gender: string,
    contact: string,
    consultant: string,
    diagnosis: string,
    reason: string,
    height: string,
    weight: string,
    bsa: string,
    bp: string,
    pulse: string,
    status: string,
    opinion: string,
    patientInfo: string,
    complaint:string,
    medicine: string,
    fType: string,
    dosage: string,
    period:string,
    days: number,
    qty:string,
    treatment: string,
    spo2:string,
    temp:string,
    rbs:string,
    past:string,
    allergies:string,
    general:string,
    remark:string,
    address:string,

}