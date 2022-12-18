import { Fragment } from "react";

import { DUMMY_MEETUPS } from "../index";

function MeetupDetails({ meetup }) {
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

export async function getServerSideProps(context) {
  const meetupId = context.params.meetupId;
  const meetup = DUMMY_MEETUPS.find(({ id }) => id === meetupId);

  if (!meetup) return { notFound: true };
  return { props: { meetup: meetup } };
}

export default MeetupDetails;
