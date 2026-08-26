import { ArrowRight, ShieldCheck } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Link, useLocation } from "wouter";
import { Brand } from "@/components/shared/brand";
import { mockService } from "@/data/mock-data";

export function AuthPage({ mode }: { mode: "login" | "register" }) {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState(mode === "login" ? "alex@rivera.dev" : "");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    void mockService.authenticate().then(() => setLocation("/dashboard"));
  };
  return (
    <div className="auth-page">
      <div className="auth-aside">
        <Brand dark />
        <div className="auth-quote">
          <div className="eyebrow light">
            <span className="eyebrow-dot" />A clearer way forward
          </div>
          <h1>
            Bring your
            <br />
            <em>best thinking.</em>
          </h1>
          <p>One focused path from study notes to interview-ready.</p>
          <div className="auth-aside-art">
            <div className="auth-line line-a" />
            <div className="auth-line line-b" />
            <div className="auth-orb">74</div>
          </div>
          <small>PREPMASTER / SIGNAL SYSTEM</small>
        </div>
      </div>
      <div className="auth-main">
        <Link href="/" className="auth-back" data-testid="link-back-home">
          ← Back to home
        </Link>
        <div className="auth-form-wrap">
          <div className="eyebrow">Welcome to PrepMaster</div>
          <h2>
            {mode === "login"
              ? "Pick up where you left off."
              : "Make your next rep count."}
          </h2>
          <p className="auth-lede">
            {mode === "login"
              ? "Your study map is waiting."
              : "A focused prep plan, made from your own material."}
          </p>
          <form onSubmit={submit} className="auth-form">
            {mode === "register" && (
              <label>
                Full name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  required
                  data-testid="input-name"
                />
              </label>
            )}
            <label>
              Email address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                data-testid="input-email"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                defaultValue="password123"
                placeholder="At least 8 characters"
                required
                data-testid="input-password"
              />
            </label>
            {mode === "login" && (
              <div className="form-row">
                <label className="check-label">
                  <input
                    type="checkbox"
                    defaultChecked
                    data-testid="input-remember"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="inline-link"
                  data-testid="button-forgot-password"
                >
                  Forgot password?
                </button>
              </div>
            )}
            <button
              className="button button-primary button-wide"
              disabled={loading}
              data-testid="button-submit-auth"
            >
              {loading
                ? "Opening your study map…"
                : mode === "login"
                  ? "Continue to PrepMaster"
                  : "Create my study map"}{" "}
              <ArrowRight size={16} />
            </button>
          </form>
          <div className="auth-switch">
            {mode === "login"
              ? "New to PrepMaster?"
              : "Already have an account?"}
            <Link
              href={mode === "login" ? "/register" : "/login"}
              data-testid="link-switch-auth"
            >
              {mode === "login" ? "Create an account" : "Log in"}
            </Link>
          </div>
          <div className="auth-trust">
            <ShieldCheck size={15} />
            Your notes stay yours. This demo uses local data only.
          </div>
        </div>
      </div>
    </div>
  );
}
