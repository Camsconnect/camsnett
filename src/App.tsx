import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import About from "./pages/About";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import WebDesign from "./pages/WebDesign";
import BusinessAppDevelopment from "./pages/BusinessAppDevelopment";
import Videography from "./pages/Videography";
import ThreeDModeling from "./pages/ThreeDModeling";
import BrandingAndGraphicDesign from "./pages/BrandingAndGraphicDesign";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Policy from "./pages/Policy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SessionProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/policy" element={<Policy />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services/social-media-management"
              element={<SocialMediaManagement />}
            />
            <Route
              path="/services/web-design"
              element={<WebDesign />}
            />
            <Route
              path="/services/business-app-development"
              element={<BusinessAppDevelopment />}
            />
            <Route
              path="/services/videography"
              element={<Videography />}
            />
            <Route
              path="/services/3d-modeling"
              element={<ThreeDModeling />}
            />
            <Route
              path="/services/branding-and-graphic-design"
              element={<BrandingAndGraphicDesign />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SessionProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;