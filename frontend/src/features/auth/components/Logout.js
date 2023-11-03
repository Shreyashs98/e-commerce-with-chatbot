import { useEffect } from "react";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(signOutAsync());
    
    if (!user) {
      window.location.href = "/login";
    }
  }, [dispatch, user]);

  return null; 
}

export default Logout;
