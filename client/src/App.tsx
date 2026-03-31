import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ReviewPage from "./pages/ReviewPage";
import ComparePage from "./pages/ComparePage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from './pages/BlogArticlePage';
import AboutPage from './pages/AboutPage';
import MethodologyPage from './pages/MethodologyPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclosurePage from './pages/DisclosurePage';

// Scroll to top on every route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/reviews/:id" component={ReviewPage} />
        <Route path="/compare/:slug" component={ComparePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogArticlePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/methodology" component={MethodologyPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/disclosure" component={DisclosurePage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
