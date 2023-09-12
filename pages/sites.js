import { useAuth } from "@/lib/auth";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

import EmptyState from "@/components/EmptyState";
import DashboardShell from "@/components/DashboardShell";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import SiteTable from "@/components/SiteTable";
import SiteTableHeader from "@/components/SiteTableHeader";
import UpgradeEmptyState from "@/components/UpgradeEmptyState";
import Page from "@/components/Page";

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);
  const isPaidAccount = user?.stripeRole !== "free";

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  if (data.sites.length) {
    return (
      <DashboardShell>
        <SiteTableHeader isPaidAccount={isPaidAccount} />
        <SiteTable sites={data.sites} />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader isPaidAccount={isPaidAccount} />
      {isPaidAccount ? <EmptyState /> : <UpgradeEmptyState />}
    </DashboardShell>
  );
};

const DashboardPage = () => (
  <Page name="Sites" path="/sites">
    <Dashboard />
  </Page>
);

export default DashboardPage;
