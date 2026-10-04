import {
  Lightbulb, Clock, PenLine, Wallet, MessageSquareText, Store, Sparkles, Megaphone,
  FileText, Instagram, PartyPopper, MessageCircle, Smartphone, BadgeDollarSign, X, Check, ArrowRight, ArrowDown, Mail, ClipboardList,
} from "lucide-react";
import { EMAIL, GOOGLE_FORM_URL, KAKAO_OPEN_CHAT_URL } from "@/data/site";
import { ContactButton, DemoBadge, Section, SectionHeading } from "./ui";

export function Hero() {
  return (
    <section className="bg-hero px-5 pb-20 pt-14 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" aria-hidden /> 소상공인을 위한 AI 마케팅
          </p>
          <h1 className="text-[34px] font-extrabold leading-[1.3] tracking-tight sm:text-5xl lg:text-[56px]">
            사장님은 장사에 집중하세요.
            <br />
            <span className="text-gradient">마케팅은 AI Smater가</span> 도와드립니다.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            가게 정보와 고객 리뷰를 AI가 분석하여 블로그, SNS, 홍보 문구 등 우리 가게에 맞는 마케팅 콘텐츠를 자동으로 만들어드립니다.
          </p>
          <ContactButton size="lg" className="mt-9" />
        </div>
        <div className="fade-up [animation-delay:150ms]">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const items = [
    { icon: Instagram, label: "Instagram", text: "오늘 오후, 따뜻한 커피와 갓 구운 디저트는 어떠세요?" },
    { icon: FileText, label: "블로그", text: "우리 동네 주민들이 다시 찾는 인기 메뉴 TOP 3" },
    { icon: MessageCircle, label: "리뷰 답변", text: "고객님, 소중한 후기 감사합니다." },
  ];
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-lift sm:p-7" role="img" aria-label="AI Smater 대시보드 예시 화면">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-primary-foreground"><Sparkles className="h-4 w-4" /></span>
          <p className="font-bold">오늘의 AI 추천 콘텐츠</p>
        </div>
        <DemoBadge />
      </div>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.label} className="rounded-2xl border border-border bg-background p-4 transition-shadow hover:shadow-soft">
            <div className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-primary">
              <it.icon className="h-4 w-4" /> {it.label}
            </div>
            <p className="font-medium">{it.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-primary-soft px-4 py-3 text-sm">
        <span className="font-medium text-primary">새 콘텐츠 3개가 준비되었어요</span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
      </div>
    </div>
  );
}

const problems = [
  { icon: Lightbulb, t: "콘텐츠 아이디어 부족", d: "오늘은 무엇을 올려야 하지?" },
  { icon: Clock, t: "시간 부족", d: "매장 운영만으로도 하루가 부족합니다." },
  { icon: PenLine, t: "글쓰기 어려움", d: "블로그와 SNS 글을 매번 작성하기 어렵습니다." },
  { icon: Wallet, t: "마케팅 비용 부담", d: "광고대행사를 이용하기에는 비용이 부담됩니다." },
  { icon: MessageSquareText, t: "리뷰 관리", d: "많은 고객 리뷰에 일일이 답변하기 어렵습니다." },
];

export function ProblemSection() {
  return (
    <Section className="bg-muted/60">
      <SectionHeading eyebrow="이런 고민 있으셨나요?" title={"마케팅이 중요하다는 건 알지만\n직접 하기에는 너무 어렵습니다."} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {problems.map((p) => (
          <article key={p.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
            <p.icon className="mb-4 h-7 w-7 text-muted-foreground" aria-hidden />
            <h3 className="mb-2 text-lg font-bold">{p.t}</h3>
            <p className="text-muted-foreground">{p.d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function SolutionSection() {
  return (
    <section className="px-5 pt-20 sm:pt-28">
      <div className="mx-auto max-w-4xl rounded-3xl bg-brand px-6 py-14 text-center text-primary-foreground shadow-lift sm:px-12">
        <Sparkles className="mx-auto mb-5 h-10 w-10" aria-hidden />
        <h2 className="text-3xl font-bold sm:text-4xl">이제 AI Smater에게 맡기세요.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          AI Smater가 가게 정보와 고객 데이터를 분석하여 필요한 마케팅 콘텐츠를 자동으로 만들어드립니다.
        </p>
      </div>
    </section>
  );
}

const steps = [
  { icon: Store, n: "STEP 1", t: "가게 정보 입력", items: ["업종", "가게 소개", "메뉴", "가격", "사진", "이벤트", "고객 리뷰"] },
  { icon: Sparkles, n: "STEP 2", t: "AI 분석", items: ["가게 특징", "인기 메뉴", "고객 만족 요소", "자주 등장하는 리뷰 키워드", "매장의 경쟁력"] },
  { icon: Megaphone, n: "STEP 3", t: "마케팅 콘텐츠 생성", items: ["블로그", "Instagram", "SNS", "이벤트 홍보", "고객 리뷰 답변", "문자", "카카오톡 홍보"] },
];

export function HowItWorks() {
  return (
    <Section>
      <SectionHeading eyebrow="이용 방법" title={"가게 정보만 입력하면\nAI 마케팅이 시작됩니다."} />
      <ol className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {steps.map((s, i) => (
          <li key={s.n} className="contents">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary"><s.icon className="h-6 w-6" aria-hidden /></span>
                <div>
                  <p className="text-sm font-bold text-primary">{s.n}</p>
                  <h3 className="text-xl font-bold">{s.t}</h3>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">{it}</li>
                ))}
              </ul>
            </div>
            {i < steps.length - 1 && (
              <div className="grid place-items-center text-primary" aria-hidden>
                <ArrowRight className="hidden h-7 w-7 lg:block" />
                <ArrowDown className="h-7 w-7 lg:hidden" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

const features = [
  { icon: FileText, t: "네이버 블로그", d: "가게와 메뉴를 소개하는 블로그 콘텐츠 생성" },
  { icon: Instagram, t: "Instagram / SNS", d: "짧고 눈에 띄는 SNS 게시물 생성" },
  { icon: PartyPopper, t: "이벤트 홍보", d: "신메뉴, 할인, 시즌 이벤트 홍보 문구 생성" },
  { icon: MessageCircle, t: "리뷰 답변", d: "고객 리뷰에 적절한 답변 자동 생성" },
  { icon: Smartphone, t: "문자 / 카카오톡", d: "기존 고객에게 보낼 홍보 메시지 생성" },
  { icon: BadgeDollarSign, t: "광고 카피", d: "온라인 광고 및 배너에 사용할 문구 생성" },
];

export function FeatureCards() {
  return (
    <Section className="bg-muted/60">
      <SectionHeading eyebrow="만들 수 있는 콘텐츠" title={"하나의 가게 정보로\n다양한 마케팅 콘텐츠를 만드세요."} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article key={f.t} className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mb-2 text-xl font-bold">{f.t}</h3>
            <p className="text-muted-foreground">{f.d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const before = ["콘텐츠 아이디어 고민", "직접 글 작성", "리뷰 일일이 확인", "리뷰 답변 직접 작성", "채널마다 별도 콘텐츠 작성", "매번 마케팅 아이디어 고민"];
const after = ["AI가 콘텐츠 추천", "AI가 홍보 글 생성", "AI가 리뷰 분석", "AI가 리뷰 답변 생성", "채널별 콘텐츠 자동 생성", "AI가 마케팅 아이디어 추천"];

export function BeforeAfter() {
  return (
    <Section>
      <SectionHeading eyebrow="달라지는 점" title={"AI Smater를 사용하면\n마케팅 업무가 이렇게 달라집니다."} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-muted p-7 sm:p-9">
          <h3 className="mb-6 text-lg font-bold text-muted-foreground">BEFORE · 지금까지는</h3>
          <ul className="space-y-4">
            {before.map((b) => (
              <li key={b} className="flex items-center gap-3 text-lg text-muted-foreground">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-card"><X className="h-4 w-4" aria-hidden /></span>{b}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border-2 border-primary/30 bg-card p-7 shadow-lift sm:p-9">
          <h3 className="mb-6 text-lg font-bold text-primary">AFTER · AI Smater와 함께</h3>
          <ul className="space-y-4">
            {after.map((a) => (
              <li key={a} className="flex items-center gap-3 text-lg font-semibold">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-4 w-4" aria-hidden /></span>{a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function DemoSection() {
  const outputs = [
    { icon: Instagram, t: "Instagram 콘텐츠", c: "맛있는 커피와 갓 구운 소금빵으로 여유로운 오후를 만나보세요." },
    { icon: FileText, t: "블로그 콘텐츠", c: "커피와 디저트를 함께 즐기기 좋은 우리 동네 카페" },
    { icon: MessageCircle, t: "리뷰 답변", c: "소중한 후기 감사합니다. 맛있는 커피와 따뜻한 서비스로 다시 찾아뵙겠습니다." },
  ];
  return (
    <Section className="bg-muted/60">
      <SectionHeading eyebrow="미리 보기" title="이렇게 만들어집니다" desc="카페를 예로 들어 AI Smater의 작동 방식을 보여드립니다." />
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
        <div className="flex items-center gap-2 border-b border-border bg-muted/70 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-destructive/60" /><span className="h-3 w-3 rounded-full bg-warning/70" /><span className="h-3 w-3 rounded-full bg-success/60" />
          <span className="ml-3 text-sm font-medium text-muted-foreground">AI Smater</span>
          <span className="ml-auto"><DemoBadge /></span>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="border-b border-border p-6 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-sm font-bold text-primary">1. 입력한 가게 정보</p>
            <dl className="space-y-4">
              <div><dt className="text-sm text-muted-foreground">업종</dt><dd className="mt-1 rounded-xl border border-input px-3 py-2 font-medium">카페</dd></div>
              <div><dt className="text-sm text-muted-foreground">대표 메뉴</dt>
                <dd className="mt-1 flex flex-wrap gap-2">{["아메리카노", "소금빵", "딸기 케이크"].map((m) => <span key={m} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">{m}</span>)}</dd></div>
              <div><dt className="text-sm text-muted-foreground">고객 리뷰</dt><dd className="mt-1 rounded-xl border border-input px-3 py-2">"커피가 맛있고 직원분들이 친절해요."</dd></div>
            </dl>
          </div>
          <div className="border-b border-border bg-primary-soft/50 p-6 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-sm font-bold text-primary">2. AI 분석 결과</p>
            <p className="mb-3 font-bold">주요 강점</p>
            <ul className="space-y-2">
              {["커피 맛", "친절한 서비스", "디저트", "편안한 분위기"].map((s) => (
                <li key={s} className="flex items-center gap-2 rounded-xl bg-card px-3 py-2.5 font-medium shadow-soft"><Check className="h-4 w-4 text-success" aria-hidden />{s}</li>
              ))}
            </ul>
          </div>
          <div className="p-6">
            <p className="mb-4 text-sm font-bold text-primary">3. 만들어진 콘텐츠</p>
            <ul className="space-y-3">
              {outputs.map((o) => (
                <li key={o.t} className="rounded-2xl border border-border p-4">
                  <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-primary"><o.icon className="h-4 w-4" aria-hidden />{o.t}</p>
                  <p className="font-medium">{o.c}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CTASection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-surface-dark px-6 py-16 text-center text-surface-dark-foreground sm:px-12">
        <h2 className="text-3xl font-bold leading-snug sm:text-4xl">우리 가게의 마케팅,<br />이제 AI와 함께 시작하세요.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg opacity-80">복잡한 마케팅 업무는 줄이고<br />고객과 매장 운영에 더 집중하세요.</p>
        <ContactButton size="lg" variant="light" className="mt-9" />
      </div>
    </section>
  );
}

const contacts = [
  { icon: Mail, t: "이메일 문의", d: "서비스에 대해 궁금한 내용을 이메일로 보내주세요.", b: "이메일 보내기", href: `mailto:${EMAIL}`, external: false },
  { icon: ClipboardList, t: "문의 작성", d: "간단한 문의 내용을 작성해주시면 확인 후 연락드리겠습니다.", b: "문의 작성하기", href: GOOGLE_FORM_URL, external: true },
  { icon: MessageCircle, t: "카카오톡 문의", d: "카카오톡 오픈채팅으로 편하게 문의하세요.", b: "카카오톡 문의하기", href: KAKAO_OPEN_CHAT_URL, external: true },
];

export function ContactSection() {
  return (
    <Section id="contact" className="pt-4">
      <SectionHeading eyebrow="문의하기" title="AI Smater가 궁금하신가요?" desc="서비스 도입, 가격, 기능 등에 대해 궁금한 내용을 편한 방법으로 문의해 주세요." />
      <div className="grid gap-5 md:grid-cols-3">
        {contacts.map((c) => (
          <article key={c.t} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary"><c.icon className="h-6 w-6" aria-hidden /></span>
            <h3 className="mb-2 text-xl font-bold">{c.t}</h3>
            <p className="mb-6 flex-1 text-muted-foreground">{c.d}</p>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              {c.b}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
