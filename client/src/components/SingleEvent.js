import axios from "axios";
import { useEffect, useState } from "react";

const SingleEvent = ({
  event,
  creator,
  updateEventFunction,
  userIdForSingleEvent,
}) => {
  const [toggle, setToggle] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [participants, setParticipants] = useState([]);

  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const [username, setUsername] = useState();

  const [presentBought, setPresentBought] = useState("");

  const buyPresent = (e) => {
    e.preventDefault();
    setPresentBought(e.target.innerText);
  };

  const findParticipant = async () => {
    for (let participant of event.participants) {
      const result = await axios.get(
        `/api/v1/user/byId/${participant.userPaymentId.userId}`
      );
      setParticipants((participants) => [...participants, result.data.name]);
    }
  };

  const toggleMore = (e) => {
    setToggle(!toggle);
    findParticipant();
    if (toggle === false) {
      setParticipants([]);
    }
  };

  const addPaymentToDatabase = async () => {
    const response = await axios.post("/api/v1/userPayment/payment", {
      userId: userIdForSingleEvent,
      amount,
      message,
    });
    if (response.status === 200) {
      const result = await axios.post("/api/v1/birthdayEvent/addParticipant", {
        paymentID: response.data._id,
        birthdayEventId: event._id,
      });

      updateEventFunction(result.data);
    }
  };

  const addPayment = (e) => {
    e.preventDefault();
    addPaymentToDatabase();
    setAmount(0);
    setMessage("");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user);

    event.birthdayPerson.wishlist.length > 0 &&
      (async () => {
        try {
          const userResponse = await axios.get(
            `/api/v1/user/${event.birthdayPerson.name}`
          );
          setWishlist(userResponse.data.wishlist);
        } catch (error) {
          console.log(error);
        }
      })();
  }, [event.birthdayPerson.wishlist.length, event.birthdayPerson.name]);

  return (
    <div className="single-event">
      <header>
        <p>Birthday Event for: {event.birthdayPerson.name}</p>
        <div></div>
      </header>
      <button
        value={event._id}
        className="btn btn-single-event"
        onClick={toggleMore}
      >
        {toggle ? "Hide" : "Show more..."}
      </button>
      {toggle && (
        <>
          <p>
            Participants:
            {toggle === true && participants.join(", ")}
          </p>
          <p>Total money amount: {event.totalMoneyAmount}</p>
          <p>Notes: {event.notes.join(", ")}</p>
          <p className={presentBought && "btn btn-primary"}>
            Present: {presentBought ? `Bought! ${presentBought}` : ""}
          </p>
          {event.eventCreator.name === creator && (
            <p>
              Wishlist:{" "}
              {wishlist.map((wish) => {
                return (
                  <button className="btn btn-primary" onClick={buyPresent}>
                    {" " + wish.name}
                  </button>
                );
              })}
            </p>
          )}
          <form>
            <label htmlFor="amount">Amount </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <label htmlFor="amount"> Message </label>
            <input
              type="text"
              id="amount"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn" onClick={addPayment}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SingleEvent;
