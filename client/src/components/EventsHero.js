import Wrapper from "../assets/wrappers/EventsHero";
import HappyBIMG from "../assets/images/happyB.png";
import { useEffect, useState } from "react";
import axios from "axios";

const EventsHero = ({
  creatorId,
  bpersonId,
  creator,
  getBirthdayEventId,
  updatedEvent,
}) => {
  const [user, setUser] = useState({});
  const [event, setEvent] = useState({});
  const [presentBought, setPresentBought] = useState("");

  const buyPresent = (e) => {
    e.preventDefault();
    setPresentBought(e.target.innerText);
  };

  if (event) {
    getBirthdayEventId(event._id);
  }

  useEffect(() => {
    creatorId &&
      (async () => {
        try {
          const eventResponse = await axios.post(
            "/api/v1/birthdayEvent/newBirthdayEvent",
            {
              creatorId,
              bpersonId,
            }
          );
          setUser(eventResponse.data.user);
          setEvent(eventResponse.data.birthdayEvent);
        } catch (error) {
          console.log(error);
        }
      })();
  }, [creatorId, bpersonId]);

  return (
    <Wrapper>
      <section className="events-hero">
        <img
          src={HappyBIMG}
          alt="birthday wish"
          className="img events-hero-img"
        />
        <article className="events-info">
          <h3>Birthday Person: {user.name}</h3>
          <p>Event creator: {creator}</p>
          <p>
            Total money amount: {updatedEvent && updatedEvent.totalMoneyAmount}
          </p>
          <p className={presentBought && "btn btn-primary"}>
            Present: {presentBought ? `Bought! ${presentBought}` : ""}{" "}
          </p>

          <p>Notes: {updatedEvent.notes && updatedEvent.notes.join(", ")}</p>
          <div className="events-wishlist">
            Buy from Wishlist:
            {Object.keys(user).length !== 0 &&
              user.wishlist.map((item) => {
                return (
                  <button className="btn wishlist-tag" onClick={buyPresent}>
                    {item.name}
                  </button>
                );
              })}
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default EventsHero;
