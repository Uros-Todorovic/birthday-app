import axios from "axios";
import { useState } from "react";

const EventsForm = ({
  creatorId,
  birthdayEventId,
  getUpdatedBirthdayEvent,
}) => {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const addPaymentToDatabase = async () => {
    const response = await axios.post("/api/v1/userPayment/payment", {
      userId: creatorId,
      amount,
      message,
    });
    if (response.status === 200) {
      const result = await axios.post("/api/v1/birthdayEvent/addParticipant", {
        paymentID: response.data._id,
        birthdayEventId,
      });
      getUpdatedBirthdayEvent(result.data);
    }
  };

  const addPayment = (e) => {
    e.preventDefault();
    addPaymentToDatabase();
    setAmount(0);
    setMessage("");
  };

  return (
    <article className="second-column">
      <h4>Add money and message</h4>
      <form className="form events-form">
        <div className="form-row">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-input"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            type="text"
            className="form-input"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block" onClick={addPayment}>
          Submit
        </button>
      </form>
    </article>
  );
};

export default EventsForm;
