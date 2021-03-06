import Feedback from "@/components/Feedback";
import { createFeedback } from "@/lib/db";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";

import { Button, Input, Box, FormControl, FormLabel } from "@chakra-ui/react";
import DashboardShell from "@/components/DashboardShell";
import SiteTableHeader from "@/components/SiteTableHeader";
import EmptyState from "@/components/EmptyState";
import UpgradeEmptyState from "@/components/UpgradeEmptyState";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  console.log(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: { siteId: site.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

const FeedbackPage = ({ initialFeedback }) => {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState([]);

  useEffect(() => {
    setAllFeedback(initialFeedback);
  }, [initialFeedback]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: "pending",
    };

    inputEl.current.value = "";
    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };

  return (
    <DashboardShell>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
      >
        {auth.user && (
          <Box as="form" onSubmit={onSubmit}>
            <FormControl my={8}>
              <FormLabel htmlFor="comment">Comment</FormLabel>
              <Input ref={inputEl} type="comment" id="Comment"></Input>
              <Button type="submit" fontWeight="medium" mt={2}>
                Add Comment
              </Button>
            </FormControl>
          </Box>
        )}

        {allFeedback &&
          allFeedback.map((feedback) => (
            <Feedback
              key={feedback.id || new Date().getTime().toString()}
              {...feedback}
            />
          ))}
      </Box>
    </DashboardShell>
  );
};

export default FeedbackPage;
