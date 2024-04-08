export interface Patients {
  uid: number;
  name: string;
  age: number;
  gender: string;
}

export interface Allergies {
  allergyId: number;
  date: string;
  type: string;
  allergen: string;
  severity: string;
  reaction: string;
  notes: string;
}
export interface Surgeries {
  surgeryId: number;
  date: string;
  type: string;
  allergen: string;
  severity: string;
  reaction: string;
  notes: string;
}
export interface DueMedications {
  name: string;
  date: string;
  time: string;
  medication: string;
}
export interface Appointments {
  statusClassName: string | undefined;
  status: string;
  date: string;
  time: string;
  endtime: string;
}
export interface Scheduled {
  medicationUID:number;
  date: string;
  time: string;
  medication: string;
  notes: string;
  status: string;
}
export interface Prorenata {
  medicationUID:number;
  date: string;
  time: string;
  medication: string;
  notes: string;
  status: string;
}
export interface Prescription{
  prescriptionUID:number;
  medicine: string;
  frequency: string;
  interval: string;
  dosage: string;
  status: string;
}
export interface VitalSign{
  vitalsignUID:number;
  date: string;
  time: string;
  bloodpressure: string;
  heartrate: string;
  temperature:string;
  respiratory: string;

}
