export interface Patients {
  uid: string;
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
  subject: string;
  notes: string;
}
