import { MongoClient, ObjectId } from "mongodb";

import { Fragment } from "react";

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

  // const meetup = DUMMY_MEETUPS.find(({ id }) => id === meetupId);
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env["MONGODB_DB_USERNAME"]}:${process.env["MONGODB_DB_PASSWORD"]}@cluster0.3beczsg.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne(
    { _id: ObjectId(meetupId) } // since we get "string" converted version of _id, from getStaticPaths
  );

  client.close();

  if (!selectedMeetup) return { notFound: true };
  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env["MONGODB_DB_USERNAME"]}:${process.env["MONGODB_DB_PASSWORD"]}@cluster0.3beczsg.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const allMeetups = await meetupsCollection
    .find(
      {}, // get all rows, in SQL terms, no WHERE clause
      { _id: 1 } // only include _id field in each row - in SQL terms: SELECT _id as opposed to SELECT *
    )
    .toArray();

  client.close();

  return {
    paths: allMeetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // fallback: false, // All pages built. Show 404 for other routes.
    // fallback: true, // Not all pages built. On unlisted route request, return a fallback page, then build and cache page for it. Finally, return the built page.
    fallback: "blocking", // Not all pages built. On unlisted route request, build and cache page for it. Finally, return the built page.
  };
}

export default MeetupDetails;
