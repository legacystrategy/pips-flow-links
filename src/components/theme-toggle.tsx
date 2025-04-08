
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div 
      className={cn(
        "fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full glassmorphism cursor-pointer transition-all duration-300 hover:scale-110",
        className
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon className="h-6 w-6 text-foreground transition-all duration-300" />
      ) : (
        <Sun className="h-6 w-6 text-foreground transition-all duration-300" />
      )}
    </div>
  );
}
