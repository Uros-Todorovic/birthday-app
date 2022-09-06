import Wrapper from "../assets/wrappers/BirthdayEvents";
import { EventsHero, AllEvents, EventsForm } from "../components";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BirthdayEvents = () => {
  const [searchParams] = useSearchParams();
  const creator = searchParams.get("name");

  const bpersonId = searchParams.get("bpersonId");

  const [creatorId, setCreatorId] = useState("");

  const [birthdayEventId, setBirthdayEventId] = useState("");

  const [updatedEvent, setUpdatedEvent] = useState({});

  const getBirthdayEventId = (id) => {
    setBirthdayEventId(id);
  };

  const getUpdatedBirthdayEvent = (updatedEvent) => {
    updatedEvent.notes.splice(0, 1);
    setUpdatedEvent(updatedEvent);
  };

  useEffect(() => {
    (async () => {
      const userResponse = await axios.get(`/api/v1/user/${creator}`);
      const id = userResponse.data._id;
      setCreatorId(id);
    })();
  }, [creator]);

  return (
    <Wrapper>
      <main className="page">
        <div className="events-page">
          {creator && bpersonId && (
            <EventsHero
              creatorId={creatorId}
              bpersonId={bpersonId}
              creator={creator}
              getBirthdayEventId={getBirthdayEventId}
              updatedEvent={updatedEvent}
            />
          )}
          <section className="events-content">
            <AllEvents />
            {creator && bpersonId && (
              <EventsForm
                creatorId={creatorId}
                birthdayEventId={birthdayEventId}
                getUpdatedBirthdayEvent={getUpdatedBirthdayEvent}
              />
            )}
          </section>
        </div>
      </main>
    </Wrapper>
  );
};

export default BirthdayEvents;
