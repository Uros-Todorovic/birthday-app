import Wrapper from "../assets/wrappers/UserTags";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const UserTags = ({ hasNextPage, hasPreviousPage, nextPage, prevPage }) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Urosh";

  return (
    <Wrapper>
      <div className="tags-container">
        <h4>Users</h4>
        <div className="tags-list">
          <Link
            to={`/?name=${name}&page=${nextPage}`}
            className={
              hasNextPage ? "btn btn-order" : "btn btn-order disabled-link"
            }
          >
            Next
          </Link>
          <Link
            to={`/?name=${name}&page=${prevPage}`}
            className={
              hasPreviousPage ? "btn btn-order" : "btn btn-order disabled-link"
            }
          >
            Previous
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserTags;
