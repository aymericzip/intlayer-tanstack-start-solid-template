import { getIntlayer } from "intlayer";
import { createComponent as _$createComponent } from "solid-js/web";
import { escape as _$escape } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
import { ssrHydrationKey as _$ssrHydrationKey } from "solid-js/web";
var _tmpl$ = ["<span", ">+</span>"],
  _tmpl$2 = ["<span", ' class="text-neutral">', "</span>"],
  _tmpl$3 = [
    "<header",
    ' class="site-header px-4"><nav class="page-wrap nav-shell relative"><h2 class="m-0 flex-shrink-0 text-base font-semibold tracking-tight">',
    '</h2><div class="absolute left-1/2 top-3 -translate-x-1/2 flex items-center gap-2">',
    '</div><div class="order-3 ml-auto flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0"><!--$-->',
    "<!--/--><!--$-->",
    content.aHrefhttpstanstackcomTargetBlankRelnoref,
    "</a></div></nav></header>",
  ];
import { Link } from "./LocalizedLink";
import { useIntlayer } from "solid-intlayer";
import { LocaleSwitcher } from "./LocaleSwitcher";

const content = getIntlayer("header");

export default function Header() {
  const content = useIntlayer("header");
  return _$ssr(
    _tmpl$3,
    _$ssrHydrationKey(),
    _$escape(
      _$createComponent(Link, {
        to: "/",
        class: "brand-pill",
        get children() {
          return [
            content.tanstack,
            _$ssr(_tmpl$, _$ssrHydrationKey()),
            _$ssr(_tmpl$2, _$ssrHydrationKey(), _$escape(content.intlayer)),
          ];
        },
      }),
    ),
    _$escape(_$createComponent(LocaleSwitcher, {})),
    _$escape(
      _$createComponent(Link, {
        to: "/",
        class: "nav-link",
        activeProps: {
          class: "nav-link is-active",
        },
        get children() {
          return content.navHome;
        },
      }),
    ),
    _$escape(
      _$createComponent(Link, {
        to: "/about",
        class: "nav-link",
        activeProps: {
          class: "nav-link is-active",
        },
        get children() {
          return content.navAbout;
        },
      }),
    ),
    _$escape(content.navDocs),
  );
}
