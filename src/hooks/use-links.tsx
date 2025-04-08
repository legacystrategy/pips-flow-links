
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Link {
  id: number;
  title: string;
  url: string;
  description: string | null;
  order_index: number;
  created_at: string;
}

export function useLinks() {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('links')
          .select('*')
          .order('order_index', { ascending: true });

        if (error) {
          throw error;
        }

        setLinks(data || []);
      } catch (err) {
        console.error('Error fetching links:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return { links, loading, error };
}
