import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      await dispatch(logout());
      navigate("/");
    };

    handleLogout();
  }, [dispatch, navigate]);

  return <div></div>;
}

export default Logout;
