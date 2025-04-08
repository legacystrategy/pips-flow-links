
import { LinkCard } from "./link-card";

// Dummy data for now - would normally come from Supabase
const links = [
  {
    id: 1,
    title: "Legacy Strategy Guide Book",
    url: "https://example.com/guide",
    description: "Complete forex trading strategy guide for all experience levels",
    order: 1
  },
  {
    id: 2,
    title: "Best Broker HFM",
    url: "https://example.com/hfm",
    description: "Get access to the best broker for forex trading",
    order: 2
  },
  {
    id: 3,
    title: "Regal Unity Capital (Mentorship)",
    url: "https://example.com/mentorship",
    description: "Join our exclusive mentorship program and accelerate your growth",
    order: 3
  },
  {
    id: 4,
    title: "YouTube Channel",
    url: "https://youtube.com/example",
    description: "Check out our latest forex strategy videos and market analyses",
    order: 4
  }
];

export function MainContent() {
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
        {links.sort((a, b) => a.order - b.order).map((link) => (
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
