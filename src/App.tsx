import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import ProjectsCurrent from "./pages/ProjectsCurrent";
import ProjectsPast from "./pages/ProjectsPast";
import News from "./pages/News";
import Donate from "./pages/Donate";
import Checkout from "./pages/Checkout";
import MacedonianHome from "./pages/MacedonianHome";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/current" element={<ProjectsCurrent />} />
          <Route path="/projects/past" element={<ProjectsPast />} />
          <Route path="/news" element={<News />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mk" element={<MacedonianHome />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
