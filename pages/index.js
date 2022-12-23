import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Aldrin_Looks_Back_at_Tranquility_Base_-_GPN-2000-001102.jpg",
    address: "Tranquility Base, the Moon",
    description: "Going back to the Moon",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    address: "Mount Everest, Earth",
    description: "Somewhere atop Nepal",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/PIA08391_Epimetheus%2C_Rings_and_Titan.jpg",
    address: "Titan, near Saturn",
    description: "CoD Infinite Warfare anyone?",
  },
];

function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
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

  const allMeetups_JSON_friendly = allMeetups.map((meetup) => ({
    ...meetup,
    _id: meetup._id.toString(), // string - is "JSON serializable"
  }));

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
