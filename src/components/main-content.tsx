
import { LinkCard } from "./link-card";
import { useLinks } from "@/hooks/use-links";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { DailyBias } from "./daily-bias";

export function MainContent() {
  const { links, loading, error } = useLinks();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts for smooth transition
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
      {/* Header section */}
      <div className="text-center mb-10 space-y-4 max-w-lg">
        <h1 
          className={`text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 ${
            animate ? 'animate-flow' : ''
          }`}
          style={{
            backgroundImage: 'linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            backgroundSize: '200% 200%'
          }}
        >
          Only Pips
        </h1>
        
        <h2 className="text-xl text-foreground/80 font-medium">
          Forex Trader | 6 Years Experience
        </h2>
        
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          I am not a financial advisor and will never be a financial advisor. I do not offer any financial advice at all, and anything I say should never be regarded as financial advice.
        </p>
      </div>

      {/* Daily Bias Section */}
      <DailyBias />

      {/* Links section */}
      <div className="w-full space-y-4 md:space-y-5 mt-6">
        {loading && (
          <>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full">
                <Skeleton className="h-20 w-full rounded-md" />
              </div>
            ))}
          </>
        )}
        
        {error && (
          <div className="p-4 text-center text-destructive">
            Failed to load links. Please try again later.
          </div>
        )}

        {!loading && !error && links.map((link) => (
          <LinkCard
            key={link.id}
            title={link.title}
            url={link.url}
            description={link.description}
          />
        ))}
      </div>
    </div>
  );
}
