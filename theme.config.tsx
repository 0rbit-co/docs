import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { GoogleAnalytics } from "@next/third-parties/google";
import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";

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
      <meta property="og:title" content="0rbit Technical Documentation" />
      <meta
        name="description"
        content="0rbit Technical Documentation | The Decentralized Oracle on AO"
      />
      <meta
        property="og:description"
        content={
          frontMatter.description ||
          "0rbit Technical Documentation | The Decentralized Oracle on AO"
        }
      />
      <meta
        property="og:image"
        content="https://www.0rbit.co/logos/ogBanner.jpeg"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.0rbit.co/logos/ogBanner.jpeg"
      />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || "0rbit"} />
      <meta
        property="twitter:image"
        content="https://www.0rbit.co/logos/ogBanner.jpeg"
      ></meta>
      <meta
        property="twitter:title"
        content="0rbit Technical Documentation"
      ></meta>
      <meta
        property="twitter:description"
        content="0rbit Technical Documentation | The Decentralized Oracle on AO"
      ></meta>
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
  );
};

const config: DocsThemeConfig = {
  primaryHue: 37,
  docsRepositoryBase: "https://github.com/0rbit-co/docs/blob/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    let _titleTemplate: string =
      asPath === "/" ? "0rbit Docs" : "0rbit Docs | %s";

    return {
      titleTemplate: _titleTemplate,
      defaultTitle: "0rbit Technical Documentation",
      description:
        "0rbit Technical Documentation | The Decentralized Oracle on AO",
      openGraph: {
        title: "0rbit Technical Documentation",
        description:
          "0rbit Technical Documentation | The Decentralized Oracle on AO",
        images: [
          {
            url: "https://raw.githubusercontent.com/0rbit-co/docs/main/public/images/logo/logo.svg",
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
  darkMode: false,
  logo: (
    <>
      <img
        src="/images/logo/lightLogo.svg"
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
    component: (
      <div className="">
        <Footer />
      </div>
    ),
  },
};

export default config;
