import { MongoClient } from "mongodb";

import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";

function HomePage({ meetups }) {
  return (
    <>
      <Head>
        {/* <title>React Meetups</title> */}
        <meta
          name="description"
          content="Browse a huge list of active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  // assume send an HTTP request to fetch data

  // fetch("/api/meetups"); unnecessary (calling self!!), call the DB directly

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env["MONGODB_DB_USERNAME"]}:${process.env["MONGODB_DB_PASSWORD"]}@cluster0.3beczsg.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const allMeetups = await meetupsCollection.find().toArray();

  client.close();

  const allMeetups_JSON_friendly = allMeetups.map(
    ({ _id, image, title, address }) => ({
      id: _id.toString(), // string - is "JSON serializable"
      image,
      title,
      address,
    })
  );

  return {
    props: {
      // everything here needs to be "JSON serializable".
      // Note: data doesn't need to be JSON, it must just be "JSON serializable".
      meetups: allMeetups_JSON_friendly,
      revalidate: 10,
    },
  };
}

export default HomePage;
