import {
  House,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  CalendarDays,
  Plus
} from "lucide-react";

import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader";

export default function HomePage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <PageHeader
          eyebrow="ภาพรวมการเงิน"
          title="สวัสดี 👋"
        />

        {/* KPI */}
        <section className="kpi-grid">
          <StatCard
            icon={<House size={18} />}
            label="ทรัพย์สิน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />

          <StatCard
            icon={<CreditCard size={18} />}
            label="หนี้สิน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />

          <StatCard
            icon={<TrendingUp size={18} />}
            label="เงินลงทุน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />

          <StatCard
            icon={<ShieldCheck size={18} />}
            label="ทุนประกัน"
            value="฿0"
            description="ยังไม่มีข้อมูล"
          />
        </section>

        {/* Net Worth */}
        <section
          className="card card-padding net-worth-card"
        >
          <div className="page-eyebrow">
            มูลค่าสุทธิ
          </div>

          <div className="kpi-value">
            ฿0
          </div>

          <div className="kpi-description">
            ทรัพย์สิน − หนี้สิน
          </div>
        </section>

        <section className="dashboard-grid">

          {/* Assets */}
          <section className="card card-padding">
            <div className="section-title">
              ภาพรวมทรัพย์สิน
            </div>

            <div className="donut-wrapper">
              <div className="donut" />
            </div>

            <EmptyState
              icon={<House size={20} />}
              title="ยังไม่มีสินทรัพย์"
              description="เพิ่มบ้าน รถ ที่ดิน เงินสด หรือสินทรัพย์อื่น ๆ"
              buttonText="เพิ่มสินทรัพย์"
            />
          </section>

          {/* Debts */}
          <section className="card card-padding">
            <div className="section-title">
              ภาพรวมหนี้สิน
            </div>

            <EmptyState
              icon={<CreditCard size={20} />}
              title="ยังไม่มีรายการหนี้"
              description="เพิ่มหนี้เพื่อให้ระบบคำนวณยอดคงเหลือ ดอกเบี้ย และแผนชำระ"
              buttonText="เพิ่มหนี้"
            />
          </section>

          {/* Allocation */}
          <section className="card card-padding full-width">
            <div className="section-title">
              เงินเดือนนี้จัดสรรไปที่ไหน?
            </div>

            <Allocation
              label="ค่าใช้จ่ายครอบครัวและลูก"
              percent={0}
              color="family"
            />

            <Allocation
              label="ทรัพย์สินและโครงการ"
              percent={0}
              color="assets"
            />

            <Allocation
              label="หนี้สิน"
              percent={0}
              color="debt"
            />

            <Allocation
              label="การเงินและการลงทุน"
              percent={0}
              color="investment"
            />
          </section>

          {/* Financial Plan */}
          <section className="card card-padding full-width">
            <div className="section-title">
              แผนการเงิน
            </div>

            <EmptyState
              icon={<CalendarDays size={22} />}
              title="ยังไม่มีแผนการเงิน"
              description={
                <>
                  เพิ่มรายได้ รายจ่าย หนี้ หรือเงินกันไว้ล่วงหน้า
                  <br />
                  เพื่อให้ระบบช่วยวางแผนเงินในเดือนถัดไป
                </>
              }
            />
          </section>

          {/* Quick Actions */}
          <section className="card card-padding full-width">
            <div className="section-title">
              เพิ่มข้อมูล
            </div>

            <div className="quick-actions">
              {[
                "รายได้",
                "รายจ่าย",
                "หนี้สิน",
                "สินทรัพย์",
                "เงินลงทุน",
                "ประกัน"
              ].map((item) => (
                <button
                  key={item}
                  className="button button-secondary"
                >
                  <Plus size={15} />
                  {item}
                </button>
              ))}
            </div>
          </section>
        </section>

        <div className="footer-note">
          Demo v0.1 • เตรียมโครงสร้างสำหรับฐานข้อมูลและ Google Login
        </div>
      </main>
    </div>
  );
}

function Allocation({
  label,
  percent,
  color
}: {
  label: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="allocation-row">
      <div>
        <div className="allocation-label">
          <span>{label}</span>
          <span>{percent}%</span>
        </div>

        <div className="allocation-bar">
          <div
            className={`allocation-fill ${color}`}
            style={{
              width: `${percent}%`
            }}
          />
        </div>
      </div>

      <div className="allocation-percent">
        {percent}%
      </div>
    </div>
  );
}
