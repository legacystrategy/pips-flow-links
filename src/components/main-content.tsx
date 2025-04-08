
import { LinkCard } from "./link-card";
import { useLinks } from "@/hooks/use-links";
import { Skeleton } from "@/components/ui/skeleton";

export function MainContent() {
  const { links, loading, error } = useLinks();

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
      {/* Header section */}
      <div className="text-center mb-10 space-y-4 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text">
          Only Pips
        </h1>
        
        <h2 className="text-xl text-foreground/80 font-medium">
          Forex Trader | 6 Years Experience
        </h2>
        
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          I am not a financial advisor and will never be a financial advisor. I do not offer any financial advice at all, and anything I say should never be regarded as financial advice.
        </p>
      </div>

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
