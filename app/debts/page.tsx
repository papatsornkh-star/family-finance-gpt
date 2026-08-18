import { CreditCard } from "lucide-react";

import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function DebtsPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="การเงินครอบครัว"
          title="หนี้สิน"
        />

        <section className="card card-padding">
          <EmptyState
            icon={<CreditCard size={22} />}
            title="ยังไม่มีรายการหนี้"
            description="เพิ่มหนี้เพื่อดูยอดคงเหลือ ดอกเบี้ย ค่างวด และระยะเวลาชำระ"
            buttonText="เพิ่มหนี้"
          />
        </section>
      </main>
    </div>
  );
}
