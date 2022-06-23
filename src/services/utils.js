const baseUrl = process.env.REACT_APP_LOCALHOST_URL

export const sendRequest = async (route, request, isFile = false) => {
  console.log('Reached the request with ', request, 'to ', route)
    let response;
    try {
      response = await fetch(baseUrl + route, request);
    } catch (error) {
      return { success: false };
    }
    try {
      const data = (isFile && response.status === 200) ? await response.blob() : await response.json();
      return data;
    } catch (error) {
      return { success: false };
    }
  };