import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useParams,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { HydrationScript } from "solid-js/web";
import { Suspense } from "solid-js";
import { IntlayerProvider } from "solid-intlayer";
import { defaultLocale, getHTMLTextDir, type Locale } from "intlayer";

import Header from "../components/Header";

import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
  head: () => ({
    links: [{ rel: "stylesheet", href: styleCss }],
  }),
  shellComponent: RootComponent,
});

type Params = {
  locale: Locale;
};

function RootComponent() {
  // Try to find locale in params of any active match
  const params = useParams({ strict: false });
  // This assumes you use the dynamic segment "/{-$locale}" in your route tree
  const locale = params()?.locale ?? defaultLocale;

  return (
    <html dir={getHTMLTextDir(locale)} lang={locale}>
      <head>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        <IntlayerProvider locale={locale}>
          <Suspense>
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
          </Suspense>
        </IntlayerProvider>
        <Scripts />
      </body>
    </html>
  );
}
