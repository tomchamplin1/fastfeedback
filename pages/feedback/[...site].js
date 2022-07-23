import useSWR from "swr";
import { useRouter } from "next/router";

import { useAuth } from "@/lib/auth";
import fetcher from "@/utils/fetcher";

import FeedbackEmptyState from "@/components/FeedbackEmptyState";
import DashboardShell from "@/components/DashboardShell";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import FeedbackTable from "@/components/FeedbackTable";
import SiteFeedbackTableHeader from "@/components/SiteFeedbackTableHeader";
import Page from "@/components/Page";

const SiteFeedback = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data } = useSWR(
    user ? [`/api/feedback/${query.site}`, user.token] : null,
    fetcher
  );

  if (!data) {
    return (
      <DashboardShell>
        <SiteFeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteFeedbackTableHeader siteName={data.site.name} />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
};

const SiteFeedbackPage = () => (
  <Page name="Feedback" path="/feedback">
    <SiteFeedback />
  </Page>
);

export default SiteFeedbackPage;
