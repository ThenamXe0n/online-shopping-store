import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { verifyUserLoginApi } from "../service/apiCollections";

const Protected = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // loading by default to prevent children from rendering

  async function checkUserLogin() {
    try {
      const response = await verifyUserLoginApi();
      console.log(response.loginStatus);
      setIsLoggedIn(response.loginStatus);
      setIsLoading(false); // api completed ==> loading ko off kr denge
    } catch (error) {
      setIsLoggedIn(false);
      setIsLoading(false); // api completed (rejected or api fail) ==> loading ko off kr denge

      console.log(error.loginStatus);
    }
  }
  console.log(isLoggedIn);

  useEffect(() => {
    checkUserLogin();
  }, []);

  /// waiting for state to update from api
  if (isLoading) {
    return (
      <div className="h-screen w-screen text-2xl text-black uppercase flex items-center justify-center">
        <span className="animate-bounce">Loading...</span>
      </div>
    );
  }
  /// checking state
  if (!isLoggedIn) {
    return <Navigate to={"/login"} replace={true} />;
  }

  ///rendering children if user is logged In
  return <div>{children}</div>;
};

export default Protected;
