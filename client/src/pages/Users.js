import { Hero, UserTags, UserList } from "../components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Urosh";
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  const [users, setUsers] = useState([]);

  const page = searchParams.get("page") || 1;
  const [hasNextPage, sethasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/api/v1/user/listOfAllUsers/${capitalizedName}/${page}`
        );
        response.data.users.sort(
          (a, b) =>
            new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
        );

        response.data.users.sort(
          (a, b) =>
            new Date(a.birthDate).getMonth() +
            1 -
            (new Date(b.birthDate).getMonth() + 1)
        );

        setUsers(response.data.users);
        sethasNextPage(response.data.hasNextPage);
        setHasPreviousPage(response.data.hasPreviousPage);
        setNextPage(response.data.nextPage);
        setPrevPage(response.data.prevPage);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [capitalizedName, page]);

  return (
    <main className="page">
      <Hero />
      <section className="users-container">
        <UserTags
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
        <UserList users={users} />
      </section>
    </main>
  );
};

export default Users;
