import { TrendingUp } from "lucide-react";

import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function InvestmentsPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="การเงินครอบครัว"
          title="เงินลงทุน"
        />

        <section className="card card-padding">
          <EmptyState
            icon={<TrendingUp size={22} />}
            title="ยังไม่มีเงินลงทุน"
            description="เพิ่มกองทุน หุ้น ETF ทองคำ หรือสินทรัพย์ลงทุนอื่น ๆ"
            buttonText="เพิ่มเงินลงทุน"
          />
        </section>
      </main>
    </div>
  );
}
