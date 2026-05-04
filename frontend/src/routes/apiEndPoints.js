const apiEndPoints = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  LOGOUT: "/user/logout",
  VERIFY_LOGIN: "/user/verify-login",

  //products api
  GET_ALL_PRODUCTS: (query) => {
    if(query){
      return `/product?` + query  
    }else{
      return "/product"
    }
  },
};

export default apiEndPoints;
