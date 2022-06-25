import Feedback from "@/components/Feedback";
import { createFeedback } from "@/lib/db";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import useRef from "react";

import { Button, Input, Box, FormControl, FormLabel } from "@chakra-ui/react";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const feedback = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: { siteId: site.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = ({ initialFeedback }) => {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      auth: auth.user.name,
      authorId: auth.user.uid,
      sideId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: "pending",
    };
    createFeedback(newFeedback);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="Comment">Comment</FormLabel>
          <Input ref={inputEl} type="Comment" id="Comment"></Input>
          <Button type="submit" fontWeight="medium" mt={2}>
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {initialFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export default SiteFeedback;
