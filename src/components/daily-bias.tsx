
import { useBias } from "@/hooks/use-bias";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

export function DailyBias() {
  const { biasData, loading, error } = useBias();

  if (loading) {
    return (
      <div className="w-full max-w-xl mx-auto my-6">
        <Skeleton className="h-32 w-full rounded-md" />
      </div>
    );
  }

  if (error || !biasData) {
    return (
      <div className="w-full max-w-xl mx-auto my-6 p-4 text-center text-destructive">
        Unable to load daily bias information.
      </div>
    );
  }

  const formattedDate = new Date(biasData.updated_at);
  const timeAgo = formatDistanceToNow(formattedDate, { addSuffix: true });

  return (
    <Card className="w-full max-w-xl mx-auto my-6 overflow-hidden glassmorphism animate-fade-in">
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Daily Gold Bias</h2>
          <span className="text-xs text-muted-foreground">
            Updated {timeAgo}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="flex gap-2 items-center">
              <span className="text-xl font-bold">
                {biasData.bias === "Buy" ? (
                  <span className="text-green-500">Buy</span>
                ) : (
                  <span className="text-red-500">Sell</span>
                )}
              </span>
              <span className="text-sm text-muted-foreground">
                {biasData.timeframe}
              </span>
            </div>
          </div>
          
          <a 
            href={biasData.tradingview_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View on TradingView
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        
        <p className="text-xs text-muted-foreground mt-3">
          This is not a signal. This is just my personal bias and should not be taken as financial advice.
        </p>
      </div>
    </Card>
  );
}
