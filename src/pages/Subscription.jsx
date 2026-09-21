import PricingSection from "../components/home/PricingSection";
import Seo from "../components/common/Seo";
import PageHeader from "../components/common/PageHeader";

export default function Subscription() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a]">
      <Seo
        title="Subscription Plans"
        description="Transparent, verified home healthcare subscription plans from Health Cross Organization — Standard and Premium, with no hidden fees."
        path="/subscription"
      />
      <PageHeader
        title="Subscription Plans"
        description="Standard and Premium home healthcare plans, with no hidden fees."
        crumbs={[{ label: "Subscription Plans" }]}
      />
      <PricingSection />
    </div>
  );
}
