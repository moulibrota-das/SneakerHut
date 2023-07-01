import React, { useEffect, useState } from "react";

function Announcement() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("announcement").classList.add("opacity-0");
    }, 4000);
  }, []);

  return (
    <div
      id="announcement"
      className=" h-8 w-full bg-teal-500  text-white flex justify-center items-center font-medium transition-opacity"
    >
      Free Shipping on Orders Over ₹650
    </div>
  );
}

export default Announcement;
