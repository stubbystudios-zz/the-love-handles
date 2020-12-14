import Head from "next/head";

import { getIndexPage } from "../lib/api";

import PostBody from "../components/post-body";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

export default function About({ indexPage, settingsData }) {
  const findHomePage = indexPage.edges.filter(
    (edge) => edge.node.isFrontPage === true
  );
  const homePage = findHomePage[0].node;

  return (
    <>
      <Layout>
        <Head>
          <title>The Love Handles | Live rock from Austin, Texas</title>
        </Head>
        <Header />
        <div className="main-container">
          <Container className="main-container">
            <PostBody content={homePage.content} />
          </Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const indexPage = await getIndexPage();

  return {
    props: {
      indexPage
    },
  };
}
