import wishIMG from "../assets/images/wish.svg";

const SingleWish = ({ name, urlLink }) => {
  return (
    <div className="wish">
      <img src={wishIMG} alt="happy birthday" className="img wish-img" />
      <h5>{name}</h5>
      <a
        href={urlLink}
        rel="noreferrer"
        target="_blank"
        className="btn btn-wish"
      >
        Go to url
      </a>
    </div>
  );
};

export default SingleWish;
