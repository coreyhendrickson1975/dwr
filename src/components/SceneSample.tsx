import { useState } from "react";

interface SceneSampleProps {
  title: string;
  duration: string;
  description: string;
  sceneNumber: number;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export function SceneSample({ title, duration, description, videoUrl, thumbnailUrl }: SceneSampleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "preview2026") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="group w-full text-left">
        <div className="aspect-video bg-muted mb-4 flex items-center justify-center relative overflow-hidden">
          {thumbnailUrl ? (
            <img src={thumbnailUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <svg className="w-8 h-8 text-muted-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          )}
        </div>
        <p className="text-xs text-muted-foreground mb-1">{duration}</p>
        <h3 className="text-sm text-foreground group-hover:underline">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-background border border-border max-w-md w-full mx-4 p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="font-serif text-xl text-foreground">
                {isUnlocked ? title : "Password Required"}
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                {isUnlocked
                  ? "You now have access to this scene preview."
                  : "Enter the password to view this scene sample."}
              </p>
            </div>

            {isUnlocked ? (
              <div className="space-y-4">
                {videoUrl ? (
                  <iframe
                    src={videoUrl}
                    className="w-full aspect-video border-0"
                    allowFullScreen
                  />
                ) : (
                  <div className="aspect-video bg-muted border border-border flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Video player placeholder</p>
                  </div>
                )}
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm text-foreground">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter access password"
                    className="w-full bg-input border border-border text-foreground placeholder:text-muted-foreground h-10 px-3 outline-none focus:ring-1 focus:ring-foreground"
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground h-10 hover:opacity-90 transition-opacity"
                >
                  Unlock Scene
                </button>
              </form>
            )}

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
