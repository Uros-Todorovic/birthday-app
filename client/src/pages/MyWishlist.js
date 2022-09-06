import { SingleWish } from "../components";
import wishLIstIMG from "../assets/images/birthday-cake.jpg";
import Wrapper from "../assets/wrappers/MyWishlist";
import { useEffect, useState } from "react";
//import { useSearchParams } from "react-router-dom";
import axios from "axios";

const MyWishlist = () => {
  /* 
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Urosh";
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1); */
  const [username, setUsername] = useState();

  const [wishlist, setWishlist] = useState([]);
  const [itemName, setItemName] = useState("");
  const [urlL, setUrlL] = useState("");
  const [updatedWishlist, setUpdatedWishlist] = useState([]);

  const addItemToDatabase = async () => {
    try {
      const result = await axios.post("/api/v1/item/addItem", {
        name: itemName,
        urlLink: urlL,
      });
      if (result.status === 200) {
        addItemToWIshlist(result.data._id);
        setItemName("");
        setUrlL("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addItemToWIshlist = async (itemId) => {
    try {
      const result = await axios.post(
        `/api/v1/user/addItemToWishList/${username}`,
        {
          itemId: itemId,
        }
      );
      setUpdatedWishlist(result.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (e) => {
    e.preventDefault();
    addItemToDatabase();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user);
    (async () => {
      const response = await axios.get(`/api/v1/user/${username}`);
      setWishlist(response.data.wishlist);
    })();
  }, [username, updatedWishlist]);

  return (
    <Wrapper>
      <main className="page">
        <section className="wishlist-container">
          <article>
            <h4>Add item to my wishlist</h4>
            <form className="form wishlist-form">
              <div className="form-row">
                <label htmlFor="name" className="form-label">
                  Item Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="form-row">
                <label htmlFor="url" className="form-label">
                  Url
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="url"
                  value={urlL}
                  onChange={(e) => setUrlL(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-block" onClick={addItem}>
                Submit
              </button>
            </form>
          </article>
          <img src={wishLIstIMG} alt="cupcake" className="img wishlist-img" />
        </section>
        <section className="wishlist">
          <h4 className="wishlist-title">My Wishlist</h4>

          <div className="wish-container">
            {wishlist &&
              wishlist.map((wish) => {
                return <SingleWish name={wish.name} urlLink={wish.urlLink} />;
              })}
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default MyWishlist;
