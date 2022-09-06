import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const UserSetter = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(capitalizedName));
  }, [capitalizedName]);
};

export default UserSetter;
