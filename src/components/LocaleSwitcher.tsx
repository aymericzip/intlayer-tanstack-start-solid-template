import { template as _$template } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/ _$template(content.divClassflexFlexRowGap),
  _tmpl$2 = /*#__PURE__*/ _$template(
    `<h2 class="m-0 flex-shrink-0 text-base font-semibold tracking-tight">`,
  );
import { useLocation } from "@tanstack/solid-router";
import {
  getLocaleName,
  getPathWithoutLocale,
  getPrefix,
  getIntlayer,
} from "intlayer";
import { For } from "solid-js";
import { useIntlayer, useLocale } from "solid-intlayer";
import { Link, type To } from "./LocalizedLink";

const content = getIntlayer("locale-switcher");

export const LocaleSwitcher = () => {
  const content = useIntlayer("locale-switcher");
  const location = useLocation();
  const { availableLocales, locale, setLocale } = useLocale();
  const pathWithoutLocale = () => getPathWithoutLocale(location.pathname);
  return (() => {
    var _el$ = _$getNextElement(_tmpl$);
    _$insert(
      _el$,
      _$createComponent(For, {
        each: availableLocales,
        children: (localeEl) =>
          (() => {
            var _el$2 = _$getNextElement(_tmpl$2);
            _$insert(
              _el$2,
              _$createComponent(Link, {
                get ["aria-current"]() {
                  return localeEl === locale() ? "page" : undefined;
                },
                get ["aria-label"]() {
                  return content.localeSwitcherLabel({
                    language: getLocaleName(localeEl),
                  }).value;
                },
                onClick: () => setLocale(localeEl),
                get params() {
                  return {
                    locale: getPrefix(localeEl).localePrefix,
                  };
                },
                get to() {
                  return pathWithoutLocale() as To;
                },
                class: "brand-pill",
                activeProps: {
                  class: "brand-pill opacity-50 pointer-events-none",
                },
                get children() {
                  return getLocaleName(localeEl);
                },
              }),
            );
            return _el$2;
          })(),
      }),
    );
    return _el$;
  })();
};
