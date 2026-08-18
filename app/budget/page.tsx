import {
  WalletCards,
  Plus
} from "lucide-react";

import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function BudgetPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="การเงินครอบครัว"
          title="งบประมาณ"
        />

        <section className="card card-padding">
          <EmptyState
            icon={<WalletCards size={22} />}
            title="ยังไม่มีข้อมูลงบประมาณ"
            description="เพิ่มรายได้และรายจ่ายเพื่อเริ่มวางแผนงบประมาณของครอบครัว"
            buttonText="เพิ่มรายการ"
          />
        </section>
      </main>
    </div>
  );
}
