import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useRouter } from "next/router";
import { tree } from "next/dist/build/templates/app-page";

const headProp = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://docs.0rbit.co/" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
  return (
    <head>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTICS}');`}
      </Script>
      <title>0rbit Developer Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="0rbit Developer Docs" />
      <meta name="description" content="0rbit Developer Docs" />
      <meta
        property="og:description"
        content={frontMatter.description || "0rbit Developer Docs"}
      />
      <meta property="og:image" content="assets/images/logo/main.svg" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || "0rbit"} />
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/megabyte0x/docs2/main/assets/images/logo/main.svg"
      ></meta>
      <meta property="twitter:title" content="0rbit Developer Docs"></meta>
      <meta
        property="twitter:description"
        content="0rbit Developer Docs"
      ></meta>
    </head>
  );
};

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/0rbit-co",
  },
  main: ({ children }) => (
    <>
      {children}
      <Analytics />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "0rbit | %s",
      defaultTitle: "0rbit Developer Docs",
      description: "0rbit Developer Docs",
      openGraph: {
        title: "0rbit Developer Docs",
        description: "0rbit Developer Docs",
        images: [
          {
            url: "https://raw.githubusercontent.com/megabyte0x/docs2/main/assets/images/logo/main.svg",
          },
        ],
      },
      twitter: {
        handle: "@0rbitco",
        site: "@site",
        cardType: "summary_large_image",
      },
    };
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  logo: (
    <>
      <img
        src="https://raw.githubusercontent.com/megabyte0x/docs2/main/assets/images/logo/Orbit%20Icon.svg"
        alt="0rbit"
        width="40"
        height="40"
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>0rbit</span>
    </>
  ),
  logoLink: "http://www.0rbit.co",
  navigation: true,
  head: headProp,
  faviconGlyph: "💫",
  chat: {
    link: "https://discord.gg/mQg3kqgXDk",
  },
  docsRepositoryBase: "https://github.com/0rbit-co/docs/blob/main",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://0rbit.co" target="_blank">
          0rbit
        </a>
        .
      </span>
    ),
  },
  feedback: {
    content: "Is this page helpful?",
    labels: "feedback",
  },
  darkMode: true,
  sidebar: {
    autoCollapse: true,
  },
};

export default config;
