import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import Countdown from "./pages/Countdown";
import Index from "./pages/Index";
import Addressals from "./pages/Addressals";
import Registration from "./pages/Registration";
import Schedule from "./pages/Schedule";
import Committees from "./pages/Committees";
import CommitteeDetail from "./pages/CommitteeDetail";
import ConferenceDetails from "./pages/ConferenceDetails";
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LAUNCH_AT = new Date("2026-05-12T15:00:00").getTime();

const App = () => {
  const [unlocked, setUnlocked] = useState(Date.now() >= LAUNCH_AT);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          {!unlocked && (
            <Countdown targetAt={LAUNCH_AT} onUnlock={() => setUnlocked(true)} />
          )}
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/addressals" element={<Addressals />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/committees/:id" element={<CommitteeDetail />} />
              <Route path="/conference-details" element={<ConferenceDetails />} />
              <Route path="/gallery" element={<PhotoGallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
