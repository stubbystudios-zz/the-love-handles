import Head from "next/head";

import { getIndexPage } from "../lib/api";

import PostBody from "../components/post-body";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function About({ indexPage }) {
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
        <Intro />
        <Container>
          <h2>{homePage.title}</h2>
          <PostBody content={homePage.content} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const indexPage = await getIndexPage();
  return {
    props: { indexPage },
  };
}
