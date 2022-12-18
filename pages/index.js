import { useEffect, useState } from "react";
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

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // assume send an HTTP request to fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
