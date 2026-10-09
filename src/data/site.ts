// 연락처 정보 — 실제 값으로 이곳만 교체하세요.
export const EMAIL = "contact@aismater.com";
export const GOOGLE_FORM_URL = "https://forms.gle/your-form-id";
export const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
export const GOOGLE_FORM_ENTRY_IDS = {
  category: "entry.1000000001",
  subject: "entry.1000000002",
  message: "entry.1000000003",
  name: "entry.1000000004",
  email: "entry.1000000005",
  phone: "entry.1000000006",
} as const;
export const KAKAO_OPEN_CHAT_URL = "https://open.kakao.com/o/your-chat-id";

export const NAV_ITEMS = [
  { label: "서비스 소개", to: "/" as const },
  { label: "요금제", to: "/pricing" as const },
  { label: "활용 효과", to: "/benefits" as const },
];

export type Plan = {
  name: string;
  price: string;
  target: string;
  features: string[];
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "월 19,000원",
    target: "마케팅을 처음 시작하는 소상공인",
    features: ["AI 콘텐츠 월 30개", "SNS 콘텐츠", "리뷰 답변", "기본 마케팅 추천"],
  },
  {
    name: "Business",
    price: "월 39,000원",
    target: "꾸준히 온라인 마케팅을 운영하는 매장",
    popular: true,
    features: ["AI 콘텐츠 월 100개", "블로그 콘텐츠", "SNS 콘텐츠", "리뷰 답변", "이벤트 콘텐츠", "AI 마케팅 추천"],
  },
  {
    name: "Pro",
    price: "월 79,000원",
    target: "여러 마케팅 채널을 적극적으로 운영하는 사업자",
    features: ["높은 AI 콘텐츠 사용량", "블로그 콘텐츠", "SNS 콘텐츠", "리뷰 분석", "고객 반응 분석", "마케팅 아이디어", "콘텐츠 일정 관리", "고급 AI 분석"],
  },
];

export const FAQS = [
  { q: "무료 체험이 가능한가요?", a: "무료 체험 제공 여부와 기간은 문의해 주시면 자세히 안내해 드립니다." },
  { q: "언제든 요금제를 변경할 수 있나요?", a: "네, 가게 상황에 맞게 언제든 요금제를 변경하실 수 있습니다." },
  { q: "AI가 만든 콘텐츠를 수정할 수 있나요?", a: "물론입니다. 만들어진 글은 사장님이 원하는 대로 자유롭게 고쳐서 사용하실 수 있습니다." },
  { q: "여러 매장을 등록할 수 있나요?", a: "여러 매장을 운영하신다면 문의해 주세요. 매장 수에 맞는 방법을 안내해 드립니다." },
  { q: "기존 고객 리뷰도 분석할 수 있나요?", a: "네, 이미 받은 고객 리뷰를 바탕으로 우리 가게의 장점을 찾아드립니다." },
  { q: "어떤 업종에서 사용할 수 있나요?", a: "카페, 음식점, 미용실, 학원, 소매점 등 다양한 업종의 가게에서 사용하실 수 있습니다." },
];

export const INDUSTRIES = [
  { name: "카페", items: ["신메뉴 소개", "SNS 콘텐츠", "리뷰 답변", "시즌 이벤트"] },
  { name: "음식점", items: ["오늘의 메뉴", "블로그 콘텐츠", "고객 후기 활용", "이벤트 홍보"] },
  { name: "미용실", items: ["시술 소개", "예약 홍보", "후기 콘텐츠", "시즌 프로모션"] },
  { name: "학원", items: ["수업 소개", "수강생 모집", "학부모 후기", "교육 프로그램 소개"] },
  { name: "소매점", items: ["신상품 소개", "이벤트", "SNS 콘텐츠", "할인 프로모션"] },
];
