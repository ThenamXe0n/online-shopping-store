const apiEndPoints = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  LOGOUT: "/user/logout",
  VERIFY_LOGIN: "/user/verify-login",

  //products api
  GET_ALL_PRODUCTS: (query) => {
    if (query) {
      return `/product?` + query;
    } else {
      return "/product";
    }
  },
  ADD_TO_CART: "/cart/add",
  GET_USER_CART: "/cart/getAll/userItems",
  REMOVE_CART_ITEM: (cartId) => {
    return `/cart/${cartId}`;
  },
  PLACE_ORDER:"/order/generate",
  MY_ORDER:"/order/myorders"
};

export default apiEndPoints;
