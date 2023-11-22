import { ACCESS_TOKEN_KEY } from "./constant";
import { isClient } from "./commonUtil";
import { getTokenFromCookie } from "../app/_actions/headerAction";
import { getCookie } from "cookies-next";

// POST
const post = async (
  endPoint: string,
  data: any,
  option: { baseURL?: any } = {}
): Promise<any> => {
  let response = null;

  const url = `${option.baseURL || getBASE_URL_API()}${endPoint}`;

  if (data instanceof FormData) {
    response = await fetch(url, {
      method: "POST",
      headers: await getHeaderFormData(),
      body: data,
    });
  } else {
    response = await fetch(url, {
      method: "POST",
      headers: await getHeaderJSON(),
      body: JSON.stringify(data),
    });
  }

  // handle error
  if (!response.ok) {
    handleError({ endPoint, response });
  }

  try {
    return await response.json();
  } catch {
    return response;
  }
};

// PUT
const put = async (
  endPoint: string,
  data: any,
  option: { baseURL?: any } = {}
): Promise<any> => {
  let response = null;
  const url = `${option.baseURL || getBASE_URL_API()}${endPoint}`;

  if (data instanceof FormData) {
    response = await fetch(url, {
      method: "PUT",
      headers: await getHeaderFormData(),
      body: data,
    });
  } else {
    response = await fetch(url, {
      method: "PUT",
      headers: await getHeaderJSON(),
      body: JSON.stringify(data),
    });
  }

  // handle error
  if (!response.ok) {
    handleError({ endPoint, response });
  }

  try {
    return await response.json();
  } catch {
    return response;
  }
};

// GET
const get = async (
  endPoint: string,
  option: { baseURL?: any } = {}
): Promise<any> => {
  const token = await getToken();
  const url = `${option.baseURL || getBASE_URL_API()}${endPoint}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // handle error
  if (!response.ok) {
    handleError({ endPoint, response });
  }

  try {
    return await response.json();
  } catch {
    return response;
  }
};

// DELETE
const del = async (
  endPoint: string,
  option: { baseURL?: any } = {}
): Promise<any> => {
  const token = await getToken();
  const url = `${option.baseURL || getBASE_URL_API()}${endPoint}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // handle error
  if (!response.ok) {
    handleError({ endPoint, response });
  }

  try {
    return await response.json();
  } catch {
    return response;
  }
};

// ------------------------------------------
// Utils
// ------------------------------------------
// Debug
function debug(tag: string, message?: string) {
  console.log(`Debug: ${tag} - ${message}`);
}

// Get token
const getToken = async () => {
  return isClient() ? getCookie(ACCESS_TOKEN_KEY) : await getTokenFromCookie();
};

// Get NEXT_PUBLIC_BASE_URL_API
const getBASE_URL_API = () => {
  return isClient()
    ? process.env.NEXT_PUBLIC_BASE_URL_API
    : process.env.NEXT_PUBLIC_BASE_URL_API_IN_SERVER_SIDE;
};

// Get JSON header
const getHeaderJSON = async (): Promise<HeadersInit | undefined> => {
  const token = await getToken();
  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
};

// Handle Error
const handleError = ({
  endPoint,
  response,
}: {
  endPoint: string;
  response: Response;
}) => {
  debug(`Error: ${endPoint}`, response.text.toString());
};

// Get Formdata header
const getHeaderFormData = async () => {
  let headers: any = {};

  const token = await getToken();
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return headers;
};

const fetchInterceptor = { post, get, put, del };

export default fetchInterceptor;
