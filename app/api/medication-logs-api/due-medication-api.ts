import axios, { AxiosError } from "axios";
import { onNavigate } from "@/actions/navigation";
import { getAccessToken, setAccessToken } from "../login-api/accessToken";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// Function to get the access token from local storage

export async function fetchDueMedication(
  term: string,
  currentPage: number,
  sortBy: string,
  sortOrder: "ASC" | "DESC",
  router: any // Pass router instance as a parameter
): Promise<any> {
  const requestData = {
    term: term,
    page: currentPage,
    sortBy: sortBy,
    sortOrder: sortOrder,
  };
  try {
    console.log("searchPatient", requestData);
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("Unauthorized Access");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(
      `${apiUrl}/medication-logs/due-medications`,
      requestData,
      { headers }
    );

    console.log(response.data);
    const dueMedications = response.data;
    console.log(dueMedications, "patient dueMedications after search");
    return dueMedications;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.message === "Network Error") {
        // Handle network error
        console.error("Connection refused or network error occurred.");
        return Promise.reject(
          new Error("Connection refused or network error occurred.")
        );
      }
      if (axiosError.response?.status === 401) {
        setAccessToken("");
        onNavigate(router, "/login");
        return Promise.reject(new Error("Unauthorized access"));
      }
    }
    console.error("Error searching patient list:", error.message);
    return Promise.reject(error);
  }
}
