import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const routeAndPageTitleMap = { "/": "Home page" };

function MyApp({ Component, pageProps, router }) {
  const currentRoute = router.route;

  return (
    <Layout>
      <Head>
        <title>{routeAndPageTitleMap[currentRoute] ?? "Non-home page"}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
