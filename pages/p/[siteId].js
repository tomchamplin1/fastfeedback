async function getStaticProps(context) {
  return {
    props: {
      initialFeedback: [],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          siteId: "fNXAp7NB8rC6ZKUnbSxN",
        },
      },
    ],
    fallback: false,
  };
}

const SiteFeedback = () => {
  return "Hello World";
};

export default SiteFeedback;
