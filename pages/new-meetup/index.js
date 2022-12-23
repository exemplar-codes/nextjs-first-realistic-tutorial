import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHanlder = async (enteredMeeupData) => {
    // route - /api instead of www.somethingxyz.com, as the UI and web app server are the same.
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeeupData), // assume data is valid
      headers: {
        "Content-Type": "application/json",
      },
    });

    // assume success, no message needed - just redirect
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHanlder} />;
}

export default NewMeetupPage;
