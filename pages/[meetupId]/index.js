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

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId; // provided by getStaticPaths
  const meetup = DUMMY_MEETUPS.find(({ id }) => id === meetupId);

  if (!meetup) return { notFound: true };
  return { props: { meetup: meetup } };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
    ],
    fallback: false, // All pages built. Show 404 for other routes.
    // fallback: true, // Not all pages built. Build and cache pages for unmentioned routes on request
  };
}

export default MeetupDetails;
