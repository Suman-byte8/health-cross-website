import PricingSection from "../components/home/PricingSection";
import Seo from "../components/common/Seo";

export default function Subscription() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a] pt-[88px]">
      <Seo
        title="Subscription Plans"
        description="Transparent, verified home healthcare subscription plans from Health Cross Organization — Standard and Premium, with no hidden fees."
        path="/subscription"
      />
      <div className="py-4 lg:py-6">
        <PricingSection />
      </div>
    </div>
  );
}
