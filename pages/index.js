import Head from "next/head";

import { getIndexPage } from "../lib/api";

import PostBody from "../components/post-body";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";

export default function About({ indexPage }) {
  const findHomePage = indexPage.pages.edges.filter(
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
        <div className="main_container">
          <Container>
            <h1>{homePage.title}</h1>
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
