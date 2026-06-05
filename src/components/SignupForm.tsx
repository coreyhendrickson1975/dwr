import { useState } from "react";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch("https://formspree.io/f/xojzjwll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <p className="text-foreground font-serif text-lg">Thank you.</p>
        <p className="text-muted-foreground text-sm mt-2">
          We'll notify you when the film is released.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-input border border-border text-foreground placeholder:text-muted-foreground h-12 px-4 outline-none focus:ring-1 focus:ring-foreground"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-primary-foreground h-12 px-8 tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isLoading ? "..." : "Notify Me"}
        </button>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        No spam. Never ever. Promise.
      </p>
    </form>
  );
}
