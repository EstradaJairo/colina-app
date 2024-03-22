import axios, { AxiosError } from "axios";
import { onNavigate } from "@/actions/navigation";
import { getAccessToken, setAccessToken } from "../login-api/accessToken";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// Function to get the access token from local storage

// export async function fetchAllergiesByPatient(
//   patientId: string,
//   currentPage: number,
//   sortBy: string,
//   sortOrder: "ASC" | "DESC",
//   router: any // Pass router instance as a parameter
// ): Promise<any> {
//   const requestData = {
//     patientId: patientId.toUpperCase(),
//     page: currentPage,
//     sortBy: sortBy,
//     sortOrder: sortOrder,
//   };

//   try {
//     const accessToken = getAccessToken(); // Retrieve access token from local storage
//     if (!accessToken) {
//       throw new Error("Access token not found in local storage");
//     }

//     // Set the Authorization header with the JWT token
//     const headers = {
//       Authorization: `Bearer ${accessToken}`,
//     };

//     // Make the API request to fetch the patient list
//     const response = await axios.post(
//       `${apiUrl}/allergies/list${patientId}`,
//       requestData,
//       { headers }
//     );

//     // Handle the response data
//     const patientAllergies = response.data;
//     console.log("api allergies");

//     // Remove patientId and id fields from the response data
//     const sanitizedData = patientAllergies.data.map(
//       (item: { patientId: any; id: any }) => {
//         const { patientId, id, ...sanitizedItem } = item;
//         return sanitizedItem;
//       }
//     );

//     patientAllergies.data = sanitizedData;

//     return patientAllergies;
//   } catch (error) {
//     if ((error as AxiosError).response?.status === 401) {
//       // Unauthorized access, navigate to login page and clear headers
//       setAccessToken("");
//       onNavigate(router, "/login");

//       return Promise.reject(new Error("Unauthorized access"));
//     }
//     console.error(
//       "Error fetching patient allergies:",
//       (error as AxiosError).message
//     );
//   }
// }

export async function fetchAllergiesByPatient(
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
      `${apiUrl}/allergies/list/${patientUuid}`,
      requestData,
      { headers }
    );

    console.log(response.data);
    const { patientId, id, ...patientAllergiesNoId } = response.data;
    console.log(patientAllergiesNoId, "patient allergies after search");
    return patientAllergiesNoId;
  } catch (error) {
    if ((error as AxiosError).response?.status === 401) {
      setAccessToken("");
      onNavigate(router, "/login");
      return Promise.reject(new Error("Unauthorized access"));
    }
    console.error(
      "Error searching patient allergies:",
      (error as AxiosError).message
    );
  }
}


export async function createAllergiesOfPatient(patientId: string, formData: any, router: any): Promise<any> {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("Access token not found in local storage");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    // Make the API request to create the allergy
    const response = await axios.post(`${apiUrl}/allergies/${patientId}`, formData, { headers });
    const createdAllergy = response.data;

    return createdAllergy;
  } catch (error) {
    console.error("Error creating allergy:", error);
    throw error; // Rethrow the error to handle it in the component
  }
}

