export const httpHelper = async (url: string,
                                 method = "GET",
                                 body = null,
                                 headers = {}) => {
  const baseUrl = "http://localhost:3030/";
  try {
    const response = await fetch(baseUrl + url, {
      method, body, headers
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    return data;
  } catch (e) {
    throw e;
  }
};
