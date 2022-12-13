import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stanford_Oval_May_2011_panorama.jpg/800px-Stanford_Oval_May_2011_panorama.jpg",
    address: "Stanford, California",
    description: "Stanford University",
  },
  {
    id: "m1",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    address: "Mount Everest, Earth",
    description: "Somewhere atop Nepal",
  },
  {
    id: "m1",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/PIA08391_Epimetheus%2C_Rings_and_Titan.jpg",
    address: "Titan, near Saturn",
    description: "CoD Infinite Warfare anyone?",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
