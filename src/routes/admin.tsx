import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, CircleSlash, Github, RefreshCw, Save } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "관리 — GitHub 연결 상태 | AI Smater" },
      { name: "description", content: "AI Smater 사이트의 GitHub 연결 상태와 마지막 동기화 시각을 확인·기록하는 관리 화면입니다." },
      { property: "og:title", content: "관리 — GitHub 연결 상태 | AI Smater" },
      { property: "og:description", content: "AI Smater 사이트의 GitHub 연결 상태와 마지막 동기화 시각을 확인·기록하는 관리 화면입니다." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

type SyncState = {
  connected: boolean;
  repo: string;
  lastSync: string; // ISO string
};

const STORAGE_KEY = "aismater-github-sync";

const DEFAULT_STATE: SyncState = { connected: false, repo: "", lastSync: "" };

function formatDateTime(iso: string) {
  if (!iso) return "기록 없음";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "기록 없음";
  return d.toLocaleString("ko-KR", { dateStyle: "long", timeStyle: "short" });
}

function AdminPage() {
  const [state, setState] = useState<SyncState>(DEFAULT_STATE);
  const [repoInput, setRepoInput] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SyncState;
        setState(parsed);
        setRepoInput(parsed.repo);
      }
    } catch {
      // 저장된 값이 없거나 깨진 경우 기본값 사용
    }
  }, []);

  const save = (next: SyncState) => {
    setState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  };

  const markConnected = () => save({ connected: true, repo: repoInput.trim(), lastSync: new Date().toISOString() });
  const markDisconnected = () => save({ ...state, connected: false });
  const markSynced = () => save({ ...state, lastSync: new Date().toISOString() });

  return (
    <>
      <Section>
          <SectionHeading
            eyebrow="관리"
            title="GitHub 연결 상태"
            desc="AI Smater 사이트 코드의 GitHub 연결 여부와 마지막 동기화 시각을 확인하고 기록합니다."
          />

          <div className="mx-auto grid max-w-3xl gap-6">
            {/* 상태 카드 */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-foreground text-background" aria-hidden>
                    <Github className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">연결 상태</p>
                    <p className="flex items-center gap-2 text-xl font-bold">
                      {state.connected ? (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden /> 연결됨
                        </>
                      ) : (
                        <>
                          <CircleSlash className="h-5 w-5 text-muted-foreground" aria-hidden /> 연결 안 됨
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">마지막 동기화</p>
                  <p className="text-lg font-semibold">{formatDateTime(state.lastSync)}</p>
                </div>
              </div>
              {state.repo && (
                <p className="mt-4 rounded-lg bg-muted px-4 py-2 text-sm text-muted-foreground">
                  저장소: <span className="font-semibold text-foreground">{state.repo}</span>
                </p>
              )}
            </div>

            {/* 기록 폼 */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-bold">상태 기록하기</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                GitHub 연결과 동기화는 Lovable이 자동으로 처리하지만, 그 시각을 사이트 안에서 자동으로 읽어올 수는 없습니다.
                연결하거나 동기화를 확인하실 때 아래 버튼으로 직접 기록해 두시면 이 화면에서 언제든 확인하실 수 있습니다.
              </p>

              <label className="mt-5 block text-sm font-medium" htmlFor="repo">
                GitHub 저장소 (예: myname/ai-smater)
              </label>
              <input
                id="repo"
                type="text"
                value={repoInput}
                onChange={(e) => setRepoInput(e.target.value)}
                placeholder="계정/저장소 이름"
                className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-4 text-base outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={markConnected}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 font-semibold text-primary-foreground shadow-lift transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Save className="h-4 w-4" aria-hidden /> 연결됨으로 기록
                </button>
                <button
                  type="button"
                  onClick={markSynced}
                  disabled={!state.connected}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 font-semibold transition-all hover:-translate-y-0.5 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <RefreshCw className="h-4 w-4" aria-hidden /> 지금 동기화됨으로 기록
                </button>
                <button
                  type="button"
                  onClick={markDisconnected}
                  disabled={!state.connected}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 font-semibold text-muted-foreground transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                >
                  연결 해제로 기록
                </button>
              </div>
              {saved && <p className="mt-3 text-sm font-semibold text-primary">저장했습니다.</p>}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
