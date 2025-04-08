
import { AnimatedBackground } from "@/components/animated-background";
import { MainContent } from "@/components/main-content";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen w-full">
        <AnimatedBackground />
        <ThemeToggle />
        <MainContent />
      </div>
    </ThemeProvider>
  );
};

export default Index;
