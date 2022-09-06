import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/AllEvents";
//import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SingleEvent from "./SingleEvent";

const AllEvents = () => {
  //const [searchParams] = useSearchParams();
  //const creator = searchParams.get("name") || "Urosh";
  //const capitalizedName = creator.charAt(0).toUpperCase() + creator.slice(1);

  const [creator, setCreator] = useState();
  const [userId, setUserId] = useState();

  const [updatedEvent, setUpdatedEvent] = useState();

  const [allEvents, setAllEvents] = useState([]);
  const [openEvents, setOpenEvents] = useState([]);

  const [userIdForSingleEvent, setUserIdForSingleEvent] = useState();

  const updateEventFunction = (singleEvent) => {
    setUpdatedEvent(singleEvent);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setCreator(user);
    (async () => {
      try {
        const userResponse = await axios.get(`/api/v1/user/${creator}`);
        const userId = userResponse.data._id;
        setUserId(userId);
        const eventsResponse = await axios.post("/api/v1/birthdayEvent/all", {
          userId,
        });
        setUserIdForSingleEvent(userId);
        setAllEvents(eventsResponse.data);
      } catch (error) {}
    })();
  }, [creator, updatedEvent]);

  const getOpenEvents = async () => {
    const openEventsResponse = await axios.post("/api/v1/birthdayEvent/all", {
      userId,
      openEvent: "true",
    });
    setOpenEvents(openEventsResponse.data);
  };

  const getAllEvenets = () => {
    setOpenEvents([]);
  };

  return (
    <Wrapper>
      <article>
        <h4>All Birthday Events</h4>
        <button className="btn filter-event-button" onClick={getAllEvenets}>
          All Events
        </button>
        <button className="btn filter-event-button" onClick={getOpenEvents}>
          Open Events
        </button>

        {openEvents.length === 0 &&
          allEvents.length > 0 &&
          allEvents.map((event) => {
            return (
              <SingleEvent
                event={event}
                creator={creator}
                updateEventFunction={updateEventFunction}
                userIdForSingleEvent={userIdForSingleEvent}
              />
            );
          })}

        {openEvents.length > 0 &&
          openEvents.map((event) => {
            return (
              <SingleEvent
                event={event}
                creator={creator}
                updateEventFunction={updateEventFunction}
                userIdForSingleEvent={userIdForSingleEvent}
              />
            );
          })}
      </article>
    </Wrapper>
  );
};

export default AllEvents;
