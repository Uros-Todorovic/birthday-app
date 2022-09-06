import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userBirthdayIMG from "../assets/images/user-birthday2.svg";
import Wrapper from "../assets/wrappers/SingleUser";

const SingleUser = ({ user }) => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user);
  }, []);

  const dateOfBirthday = `${new Date(user.birthDate).getDate()}.${
    new Date(user.birthDate).getMonth() + 1
  }.${new Date().getFullYear()}.`;

  const startEvent = () => {
    navigate(`birthday-events?name=${userName}&bpersonId=${user._id}`);
  };
  return (
    <Wrapper>
      <div className="user">
        <img
          src={userBirthdayIMG}
          alt="happy birthday"
          className="img user-img"
        />
        <h5>{user.name}</h5>
        <p>Birthday: {dateOfBirthday}</p>
        <button className="btn btn-start-event" onClick={startEvent}>
          Start Event
        </button>
      </div>
    </Wrapper>
  );
};

export default SingleUser;
