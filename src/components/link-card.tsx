
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export interface LinkCardProps {
  title: string;
  url: string;
  description?: string | null;
}

export function LinkCard({ title, url, description }: LinkCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full transition duration-200 transform hover:scale-[1.01]"
    >
      <Card className="w-full overflow-hidden glassmorphism">
        <Button 
          variant="ghost" 
          className="justify-between w-full px-5 py-6 h-auto text-left"
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-base font-semibold">{title}</span>
            {description && (
              <span className="text-xs text-muted-foreground">{description}</span>
            )}
          </div>
          <ExternalLink className="h-5 w-5 opacity-70" />
        </Button>
      </Card>
    </a>
  );
}
