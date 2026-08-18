import { House } from "lucide-react";

import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/EmptyState";

export default function AssetsPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="การเงินครอบครัว"
          title="สินทรัพย์"
        />

        <section className="card card-padding">
          <EmptyState
            icon={<House size={22} />}
            title="ยังไม่มีสินทรัพย์"
            description="เพิ่มบ้าน รถ ที่ดิน เงินสด เงินฝาก หรือสินทรัพย์อื่น ๆ"
            buttonText="เพิ่มสินทรัพย์"
          />
        </section>
      </main>
    </div>
  );
}
