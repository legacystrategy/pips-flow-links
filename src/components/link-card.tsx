
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export type LinkCardProps = {
  title: string;
  url: string;
  description?: string;
  className?: string;
};

export function LinkCard({ title, url, description, className }: LinkCardProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative w-full max-w-md mx-auto animated-border overflow-hidden glassmorphism rounded-lg p-0.5",
        className
      )}
    >
      <div className="h-full w-full rounded-md glassmorphism p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-[0.98]">
        <div className="absolute top-2 right-2 w-6 h-6 rounded-full glassmorphism flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={14} />
        </div>
        
        <div className="w-full flex flex-col items-center space-y-1">
          <h3 className="text-lg font-medium tracking-tight group-hover:translate-y-[-2px] transition-transform duration-300">
            {title}
          </h3>
          
          {description && (
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              {description}
            </p>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </a>
  );
}
