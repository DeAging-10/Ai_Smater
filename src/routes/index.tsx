import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter, CTASection, ContactSection, DemoSection, FeatureCards, Hero, HowItWorks, ProblemSection, SolutionSection } from "@/components/site/Home";

const title = "AI Smater | 소상공인을 위한 AI 마케팅";
const description = "가게 정보와 고객 리뷰를 분석하여 블로그, SNS, 리뷰 답변 등 마케팅 콘텐츠를 생성하는 소상공인 AI 마케팅 서비스.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeatureCards />
      <BeforeAfter />
      <DemoSection />
      <CTASection />
      <ContactSection />
    </>
  );
}

