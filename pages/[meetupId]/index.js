import { useRouter } from "next/router";
import { Fragment } from "react";

import { DUMMY_MEETUPS } from "../index";

function MeetupDetails() {
  const meetupId = useRouter().query.meetupId;
  const meetup = DUMMY_MEETUPS.find(({ id }) => id === meetupId);

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <img src={meetup?.image} alt={meetup?.title} height="400px" />
        <h1>{meetup?.title}</h1>
        <address>{meetup?.address}</address>
        <p>{meetup?.description}</p>
      </div>
    </Fragment>
  );
}

export default MeetupDetails;
