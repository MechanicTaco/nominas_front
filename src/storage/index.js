const setStorage = data => {
    localStorage.setItem("data", JSON.stringify(data));
  };

const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
  };
  
  const getToken = () => {
    let token,
      data = null;
    try {
      data = JSON.parse(localStorage.getItem("data"));
      if (!!data) {
        token = !!data.token;
      }
    } catch (e) {
      token = false;
    }
    return token;
  }
  
  const setToken = (token) => {
    let data = null;
    try {
      data = JSON.parse(localStorage.getItem("data"));
      if (!!data) {
        data.token = token;
        setStorage(data);
      }
    } catch (e) {
      data = false;
    }
  }

export default { 
    setStorage,
    getData,
    setToken,
    getToken
   }