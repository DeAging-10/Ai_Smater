import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, CalendarDays, Check, Lightbulb, Star } from "lucide-react";
import { INDUSTRIES } from "@/data/site";
import { ContactButton, DemoBadge, Section, SectionHeading } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const title = "활용 효과 | AI Smater";
const description = "반복적인 콘텐츠 제작은 AI에게 맡기고 고객과 매장 운영에 집중하세요. AI Smater의 활용 효과를 확인하세요.";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BenefitsPage,
});

const oldFlow = ["아이디어 찾기", "자료 정리", "글쓰기", "수정", "게시"];
const newFlow = ["가게 선택", "콘텐츠 유형 선택", "AI 생성", "확인 및 수정", "활용"];

function Flow({ heading, steps, highlight }: { heading: string; steps: string[]; highlight?: boolean }) {
  return (
    <div className={cn("rounded-3xl p-7 sm:p-9", highlight ? "border-2 border-primary/30 bg-card shadow-lift" : "border border-border bg-muted")}>
      <h3 className={cn("mb-6 text-center text-lg font-bold", highlight ? "text-primary" : "text-muted-foreground")}>{heading}</h3>
      <ol className="flex flex-col items-center gap-1">
        {steps.map((s, i) => (
          <li key={s} className="flex w-full flex-col items-center">
            <span className={cn("w-full max-w-xs rounded-xl px-4 py-3 text-center font-semibold", highlight ? (s === "AI 생성" ? "bg-brand text-primary-foreground" : "bg-primary-soft text-primary") : "bg-card text-muted-foreground")}>{s}</span>
            {i < steps.length - 1 && <ArrowDown className="my-1 h-5 w-5 text-muted-foreground" aria-hidden />}
          </li>
        ))}
      </ol>
    </div>
  );
}

const schedule = [
  { day: "월요일", t: "이번 주 인기 메뉴" },
  { day: "수요일", t: "고객 리뷰 활용 콘텐츠" },
  { day: "금요일", t: "주말 방문 이벤트" },
];

const ratings = [
  { k: "친절한 직원", s: 5 },
  { k: "커피 맛", s: 5 },
  { k: "분위기", s: 4 },
];

function IndustryTabs() {
  const [active, setActive] = useState(0);
  const ind = INDUSTRIES[active] ?? INDUSTRIES[0]!;
  return (
    <div>
      <div role="tablist" aria-label="업종 선택" className="mb-8 flex flex-wrap justify-center gap-2">
        {INDUSTRIES.map((x, i) => (
          <button
            key={x.name}
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls="industry-panel"
            onClick={() => setActive(i)}
            className={cn("h-12 rounded-full px-6 text-base font-semibold transition-colors", active === i ? "bg-primary text-primary-foreground shadow-soft" : "bg-card text-muted-foreground border border-border hover:text-foreground")}
          >
            {x.name}
          </button>
        ))}
      </div>
      <div id="industry-panel" role="tabpanel" aria-labelledby={`tab-${active}`} key={ind.name} className="fade-up mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {ind.items.map((it) => (
          <div key={it} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-lg font-semibold shadow-soft">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"><Check className="h-5 w-5" aria-hidden /></span>
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function BenefitsPage() {
  return (
    <>
      <section className="bg-hero px-5 pb-12 pt-16 text-center sm:pt-24">
        <h1 className="fade-up text-[32px] font-extrabold leading-tight tracking-tight sm:text-5xl">AI 마케팅으로<br /><span className="text-gradient">사장님의 시간을</span> 돌려드립니다.</h1>
        <p className="fade-up mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">반복적인 콘텐츠 제작은 AI에게 맡기고 고객과 매장 운영에 집중하세요.</p>
      </section>

      <Section>
        <SectionHeading eyebrow="콘텐츠 제작" title="콘텐츠 만드는 과정이 간단해집니다" desc="고민하고 쓰는 과정 대신, 고르고 확인하는 과정으로 바뀝니다." />
        <div className="grid gap-5 md:grid-cols-2">
          <Flow heading="기존 방식" steps={oldFlow} />
          <Flow heading="AI Smater" steps={newFlow} highlight />
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading eyebrow="꾸준한 마케팅" title={"'무엇을 올리지?'라는 고민을 줄이고\n꾸준한 마케팅을 돕습니다."} />
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="flex items-center gap-2 font-bold"><CalendarDays className="h-5 w-5 text-primary" aria-hidden />이번 주 콘텐츠 일정</p>
            <DemoBadge />
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {schedule.map((s) => (
              <li key={s.day} className="rounded-2xl bg-primary-soft p-5">
                <p className="text-sm font-bold text-primary">{s.day}</p>
                <p className="mt-2 text-lg font-semibold">{s.t}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="고객 리뷰 분석" title="고객 리뷰에서 우리 가게의 장점을 찾아드립니다" />
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xl font-bold">고객 리뷰 328개 분석</p>
            <DemoBadge label="예시 데이터" />
          </div>
          <p className="mb-6 text-sm text-muted-foreground">아래 내용은 설명을 위한 예시이며, 실제 고객사의 결과가 아닙니다.</p>
          <ul className="divide-y divide-border rounded-2xl border border-border">
            {ratings.map((r) => (
              <li key={r.k} className="flex items-center justify-between px-5 py-4">
                <span className="font-semibold">{r.k}</span>
                <span className="flex" aria-label={`5점 중 ${r.s}점`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("h-5 w-5", i < r.s ? "fill-warning text-warning" : "text-border")} aria-hidden />
                  ))}
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between px-5 py-4">
              <span className="font-semibold">재방문 의향</span>
              <span className="rounded-full bg-success-soft px-3 py-1 text-sm font-bold text-success">높음</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-3 rounded-2xl bg-primary-soft p-5">
            <Lightbulb className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden />
            <div>
              <p className="mb-1 text-sm font-bold text-primary">AI 추천</p>
              <p className="font-medium">고객들이 높게 평가한 '친절한 서비스'를 다음 SNS 콘텐츠의 핵심 메시지로 활용해보세요.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading eyebrow="업종별 활용" title="우리 업종에서는 이렇게 활용하세요" />
        <IndustryTabs />
      </Section>

      <section className="px-5 py-20 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">우리 가게에도 맞을지 궁금하신가요?</h2>
        <p className="mt-4 text-lg text-muted-foreground">편하게 문의해 주세요. 친절하게 안내해 드립니다.</p>
        <ContactButton size="lg" className="mt-8" />
      </section>
    </>
  );
}
