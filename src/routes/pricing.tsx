import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS, PLANS, type Plan } from "@/data/site";
import { ContactButton, Section, SectionHeading } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const title = "가격 | AI Smater";
const description = "AI Smater 요금제 안내. 가게에 필요한 기능과 사용량에 맞는 요금제를 선택하세요.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PricingPage,
});

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article className={cn("relative flex flex-col rounded-3xl border bg-card p-8 transition-transform hover:-translate-y-1", plan.popular ? "border-2 border-primary shadow-lift lg:-my-4 lg:py-12" : "border-border shadow-soft")}>
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-sm font-bold text-primary-foreground">가장 인기</span>
      )}
      <h2 className="text-xl font-bold">{plan.name}</h2>
      <p className="mt-2 min-h-[3rem] text-muted-foreground">{plan.target}</p>
      <p className="my-6 text-4xl font-extrabold tracking-tight">{plan.price}</p>
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />{f}</li>
        ))}
      </ul>
      <ContactButton size="lg" variant={plan.popular ? "primary" : "light"} className={cn("w-full", !plan.popular && "border border-primary/30")} />
    </article>
  );
}

function PricingPage() {
  return (
    <>
      <section className="bg-hero px-5 pb-8 pt-16 text-center sm:pt-24">
        <h1 className="fade-up text-[32px] font-extrabold leading-tight tracking-tight sm:text-5xl">가게에 맞는 요금제를 선택하세요.</h1>
        <p className="fade-up mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">필요한 기능과 사용량에 따라 적합한 요금제를 선택할 수 있습니다.</p>
      </section>
      <Section className="pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-3 lg:gap-6">
          {PLANS.map((p) => <PricingCard key={p.name} plan={p} />)}
        </div>
      </Section>
      <Section className="bg-muted/60">
        <SectionHeading title="자주 묻는 질문" />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-6 shadow-soft">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 text-left text-lg font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
