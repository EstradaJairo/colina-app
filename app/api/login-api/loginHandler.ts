import { setAccessToken } from "./accessToken";

export async function validateUser(
  email: string,
  password: string,
  rememberMe: boolean
): Promise<string | false> {
  try {
    const expiresIn = rememberMe ? "30d" : "1d"; 
    const requestData = {
      username: email.toLocaleLowerCase(),
      password: password,
      tokenExpiresIn: expiresIn,
    };
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    
    if (response.ok) {
      const data = await response.json();
      const accessToken = data.expiryToken;
      if (accessToken) {
        // Store the access token in local storage
        setAccessToken(accessToken);
        return accessToken;
      } else {
        console.log(false);
        return false; // Access token not available
      }
    } else {
      return false; // User is not valid
    }
  } catch (error) {
    console.error("Error during login:", error);
    return false; // Return false if an error occurs
  }
}
