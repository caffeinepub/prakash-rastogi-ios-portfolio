import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/sonner";
import About from "@/pages/About";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import Projects from "@/pages/Projects";
import SkillDetail from "@/pages/SkillDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

// Layout wrapper
function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#121212" }}
    >
      <Nav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

// Routes
const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$id",
  component: ProjectDetail,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const skillDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/skills/$id",
  component: SkillDetail,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  projectsRoute,
  projectDetailRoute,
  aboutRoute,
  skillDetailRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
