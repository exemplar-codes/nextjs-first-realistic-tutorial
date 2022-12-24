import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  const route = router.route;

  return (
    <Layout>
      <Head>
        <title>1st title</title>
        <meta
          name="descriptionx"
          content="Browse a huge list of active React meetups!"
        />
      </Head>
      <Head>
        <title>2nd title</title>
        <meta
          name="description2"
          content="Browse a huge list of active React meetups!"
        />
      </Head>
      <h1>
        <code>5th title</code> appears - as it's the farthest in pre-order
        traversal
      </h1>
      <Component {...pageProps} />
      <div>
        <Head>
          <title>3rd title</title>
        </Head>
        <div>
          <Head>
            <title>4th title</title>
          </Head>
        </div>
      </div>
      <div>
        <Head>
          <title>5th title</title>
        </Head>
      </div>
    </Layout>
  );
}

export default MyApp;
