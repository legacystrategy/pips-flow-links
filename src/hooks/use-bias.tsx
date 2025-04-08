
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface BiasUpdate {
  id: number;
  bias: string;
  timeframe: string;
  updated_at: string;
  tradingview_url: string;
}

export function useBias() {
  const [biasData, setBiasData] = useState<BiasUpdate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchBias() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("bias_updates")
          .select("*")
          .order("updated_at", { ascending: false })
          .limit(1)
          .single();

        if (error) throw error;
        setBiasData(data);
      } catch (err) {
        console.error("Error fetching bias data:", err);
        setError(err instanceof Error ? err : new Error("Failed to fetch bias data"));
      } finally {
        setLoading(false);
      }
    }

    fetchBias();
  }, []);

  return { biasData, loading, error };
}
