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
<<<<<<< HEAD
export interface LabResults {
  labId: number;
  date: string;
  fbg: string;
  totalcholesterol: string;
  ldl: string;
  hdl: string;
  triglycerides: string;
}
export interface PatientAppointment {
  statusClassName: string | undefined;
  status: string;
  date: string;
  time: string;
  endtime: string;
}
export interface Note {
  date: string;
  subject: string;
  notes: string;
=======
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

>>>>>>> 8a2c1ce8705f90dfd791d91b849bc062b0f3a8ae
}
