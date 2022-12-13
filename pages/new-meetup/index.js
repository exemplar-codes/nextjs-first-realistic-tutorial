import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetupHanlder = (enteredMeeupData) => {
    console.log(enteredMeeupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHanlder} />;
}

export default NewMeetupPage;
