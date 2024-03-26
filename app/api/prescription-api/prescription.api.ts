import axios, { AxiosError } from "axios";
import { onNavigate } from "@/actions/navigation";
import { getAccessToken, setAccessToken } from "../login-api/accessToken";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPrescriptionsByPatient(
  patientUuid: string,
  term: string,
  currentPage: number,
  sortBy: string,
  sortOrder: "ASC" | "DESC",
  router: any // Pass router instance as a parameter
): Promise<any> {
  const requestData = {
    patientUuid: patientUuid.toUpperCase(),
    term: term,
    page: currentPage,
    sortBy: sortBy,
    sortOrder: sortOrder,
  };
  try {
    console.log("searchPatient", requestData);
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("Access token not found in local storage");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(
      `${apiUrl}/prescriptions/list/${patientUuid}`,
      requestData,
      { headers }
    );

    console.log(response.data);
    const { patientId, id, ...patientPrescriptionsNoId } = response.data;
    console.log(patientPrescriptionsNoId, "patient prescription after search");
    return patientPrescriptionsNoId;
  } catch (error) {
    if ((error as AxiosError).response?.status === 401) {
      setAccessToken("");
      onNavigate(router, "/login");
      return Promise.reject(new Error("Unauthorized access"));
    }
    console.error(
      "Error searching patient prescription:",
      (error as AxiosError).message
    );
  }
}


// export async function createAllergiesOfPatient(patientId: string, formData: any, router: any): Promise<any> {
//   try {
//     const accessToken = getAccessToken();
//     if (!accessToken) {
//       throw new Error("Access token not found in local storage");
//     }

//     const headers = {
//       Authorization: `Bearer ${accessToken}`,
//     };

//     // Make the API request to create the allergy
//     const response = await axios.post(`${apiUrl}/allergies/${patientId}`, formData, { headers });
//     const createdAllergy = response.data;

//     return createdAllergy;
//   } catch (error) {
//     console.error("Error creating allergy:", error);
//     throw error; // Rethrow the error to handle it in the component
//   }
// }

