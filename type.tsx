export interface Patients {
  age: number;
  codeStatus: string;
  firstName: string;
  gender: string;
  lastName: string;
  uuid: string;
}
export interface Allergy {
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
  image?: string;
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
  time:string;
  subject: string;
  notes: string;
}
export interface IncidentReport {
  date: string;
  time:string;
  subject: string;
  detailsOfincident: string;
  reportedBy: string;
}

export interface Schedule {
  medicationUID: string;
  date: string;
  time: number;
  medication: string;
  notes: string;
  status: string;
}
export interface vitalsign {
  vitalsignUID: string;
  date: string;
  time: number;
  bloodpressure: string;
  heartrate: string;
  temperature: string;
  respiratory: string;
}

export interface prorenata {
  medicationUID: string;
  date: string;
  time: string;
  medication: string;
  notes: string;
  status: string;
}
export interface prescription {
  prescriptionUID: string;
  medicine: string;
  frequency: string;
  interval: string;
  dosage: string;
  status: string;
}

export interface forms{
  nameOfDocument: string;
  dateIssued: string;
  notes: string;
}