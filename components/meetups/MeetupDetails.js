import { useEffect, useState } from "react";

import { Fragment } from "react";
import Head from "next/head";

export default function MeetupDetails({ meetup }) {
  const [loadedTitle, setLoadedTitle] = useState("");

  const getAndSetUsername = async () => {
    const resp = await fetch(`https://api.github.com/users/sanjarcode`);
    const { login: username } = await resp.json();

    setLoadedTitle("Loading..."); // to demo pure SPA behavior

    setTimeout(() => {
      setLoadedTitle(username);
    }, 1000);
  };

  useEffect(() => {
    getAndSetUsername();
  }, []);

  // note, the Head here overrides any Head
  // component above (and before) in the UI tree, including from the page and root component.

  return (
    <Fragment>
      {loadedTitle && (
        <Head>
          <title>{loadedTitle}</title>
        </Head>
      )}
      <div style={{ textAlign: "center" }}>
        <img src={meetup?.image} alt={meetup?.title} height="400px" />
        <h1>{meetup?.title}</h1>
        <address>{meetup?.address}</address>
        <p>{meetup?.description}</p>
      </div>
    </Fragment>
  );
}
