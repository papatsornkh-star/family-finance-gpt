import { Settings } from "lucide-react";

import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function SettingsPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="ระบบ"
          title="จัดการข้อมูล"
          month=""
        />

        <section className="card card-padding">
          <EmptyState
            icon={<Settings size={22} />}
            title="การตั้งค่า"
            description="ส่วนนี้จะใช้สำหรับจัดการข้อมูลครอบครัว บัญชี และการเชื่อมต่อระบบ"
          />
        </section>
      </main>
    </div>
  );
}
