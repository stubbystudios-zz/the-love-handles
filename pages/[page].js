import Head from "next/head";
import ErrorPage from "next/error";

import { useRouter } from "next/router";
import { getAllPagesWithSlug, getCurrentPage } from "../lib/api";

import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Page({ page }) {
  const router = useRouter();

  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Header />
      <Container>
        {router.isFallback ? (
          <p>Loading...</p>
        ) : (
            <>
              <article>
                <h1>{page.title}</h1>
                <PostBody content={page.content} />
              </article>
            </>
          )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getCurrentPage(params.page, preview, previewData);

  return {
    props: {
      preview,
      page: data.page,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug();

  return {
    paths: allPages.edges.map(({ node }) => `/${node.page}`) || [],
    fallback: true,
  };
}
