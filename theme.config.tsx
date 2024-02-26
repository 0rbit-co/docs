import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Head from 'next/head'
import { useRouter } from 'next/router'

const headProp = () => {
  const { asPath, defaultLocale, locale } = useRouter()
  const { frontMatter } = useConfig()
  const url =
    'https://0rbit-docs.vercel.app/' +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
  return  (
    <Head>
      <title>0rbit Developer Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="0rbit Developer Docs" />
      <meta
        name="description"
        content="0rbit Developer Docs"
      />
      <meta
          property="og:description"
          content={frontMatter.description || '0rbit Developer Docs'}
        />
      <meta property="og:image" content='assets/images/logo/main.svg' />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || '0rbit'} />
    </Head>
  )
}


const config: DocsThemeConfig = {
  logo: <span>0rbit</span>,
  project: {
    link: 'https://github.com/0rbit-co',
  },
  navigation: true,
  head: headProp,
  faviconGlyph: "💫",
  chat: {
    link: 'https://discord.gg/mQg3kqgXDk',
  },
  docsRepositoryBase: 'https://github.com/0rbit-co/docs/blob/main',
  footer: {
    text: '0rbit Developer Docs',
  },
}

export default config
