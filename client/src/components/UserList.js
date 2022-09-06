import Wrapper from "../assets/wrappers/UserList";
import SingleUser from "./SingleUser";

const UserList = ({ users }) => {
  return (
    <Wrapper>
      <div className="users-list">
        {users.map((user) => {
          return <SingleUser user={user} />;
        })}
      </div>
    </Wrapper>
  );
};

export default UserList;
