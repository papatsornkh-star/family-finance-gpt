import { CalendarDays } from "lucide-react";

import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function CalendarPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="การเงินครอบครัว"
          title="ปฏิทินการเงิน"
        />

        <section className="card card-padding">
          <EmptyState
            icon={<CalendarDays size={22} />}
            title="ยังไม่มีรายการในปฏิทิน"
            description="ระบบจะแสดงวันรับเงิน วันจ่ายบิล วันครบกำหนดหนี้ และรายการทางการเงินต่าง ๆ"
            buttonText="เพิ่มรายการ"
          />
        </section>
      </main>
    </div>
  );
}
