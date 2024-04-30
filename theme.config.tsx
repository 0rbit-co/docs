import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { GoogleAnalytics } from "@next/third-parties/google";
import ClientOnly from "./components/ClientOnly";

const googleAnalyticsMeasurementId: string =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const headProp = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://docs.0rbit.co/" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
  return (
    <head>
      <title>0rbit Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="0rbit Developer Docs" />
      <meta name="description" content="0rbit Developer Docs | Documentation" />
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
  primaryHue: 37,
  docsRepositoryBase: "https://github.com/0rbit-co/docs/blob/main",
  useNextSeoProps() {
    return {
      titleTemplate: "0rbit Docs | %s",
      defaultTitle: "0rbit Oracle on Arweave Developer Docs",
      description:
        "0rbit Oracle on Arweave | Developer Docs | Documentation for Data",
      openGraph: {
        title: "0rbit Developer Docs | Oracle on Arweave",
        description: "0rbit Decenralized Oracle on Arweave | Developer Docs",
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
  head: headProp,
  darkMode: true,
  logo: (
    <>
      <img
        src="../images/logo/lightLogo.svg"
        alt="0rbit"
        width="70"
        height="70"
      />
      {/* <span style={{ marginLeft: ".4em", fontWeight: 800 }}>0rbit</span> */}
    </>
  ),
  logoLink: "http://docs.0rbit.co",
  project: {
    link: "https://github.com/0rbit-co",
  },
  chat: {
    link: "https://discord.gg/JVSjqaKJgV",
  },
  sidebar: {
    autoCollapse: true,
  },
  main: ({ children }) => (
    <>
      <ClientOnly>{children}</ClientOnly>
      <Analytics />
      <GoogleAnalytics gaId={googleAnalyticsMeasurementId} />
    </>
  ),
  toc: {
    backToTop: true,
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  feedback: {
    content: "Is this page helpful?",
    labels: "feedback",
  },
  navigation: true,
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
  faviconGlyph: "",
};

export default config;
