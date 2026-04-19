import { Layout } from "@/components/Layout";
import { getProductById } from "@/data/products";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductsPage from "@/pages/ProductsPage";
import ServicesPage from "@/pages/ServicesPage";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$productId",
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = getProductById(params.productId);
    return { product: product ?? null };
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  productDetailRoute,
  aboutRoute,
  servicesRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
