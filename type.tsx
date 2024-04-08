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
