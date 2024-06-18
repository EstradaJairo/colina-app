export const getAccessToken = (): string | null => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("accessToken");
  }
  return null;
};

export const setAccessToken = (accessToken: string): void => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("accessToken", accessToken);
  }
};

export const getRememberToken = (): string | null => {
  if (typeof window !== "undefined") {
    // Check if window object is defined (client-side)
    return localStorage.getItem("accessRememberToken");
  }
  return null;
};

export const setRememberToken = (accessRememberToken: string): void => {
  if (typeof window !== "undefined") {
    // Check if window object is defined (client-side)
    localStorage.setItem("accessRememberToken", accessRememberToken);
  }
};

export const setUserDetail = (userDetail:any[]): void => {
  if (typeof window !== "undefined") {
    // Check if window object is defined (client-side)
    localStorage.setItem("userDetail", JSON.stringify(userDetail));
  }
};

export const getUserDetail = (): any | null => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const userDetailString = localStorage.getItem("userDetail");
      if (userDetailString) {
        return JSON.parse(userDetailString);
      }
    } catch (error) {
      console.error("Error parsing userDetail from localStorage:", error);
    }
  }
  return null;
};