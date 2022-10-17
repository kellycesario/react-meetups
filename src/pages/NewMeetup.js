import { useHistory } from "react-router-dom";
import NewMeetpForm from "../components/meetups/NewMeetup";

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-3f18f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
