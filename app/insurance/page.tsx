import { ShieldCheck } from "lucide-react";

import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function InsurancePage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="การเงินครอบครัว"
          title="ประกัน"
        />

        <section className="card card-padding">
          <EmptyState
            icon={<ShieldCheck size={22} />}
            title="ยังไม่มีข้อมูลประกัน"
            description="เพิ่มประกันชีวิต สุขภาพ รถยนต์ หรือกรมธรรม์อื่น ๆ"
            buttonText="เพิ่มประกัน"
          />
        </section>
      </main>
    </div>
  );
}
