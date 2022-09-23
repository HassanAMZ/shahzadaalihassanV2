const siteMetadata = {
  title: 'Shahzada Ali Hassan - Top Web Analyst On Upwork',
  author: 'Shahzada Ali Hassan',
  authorShortName: 'Shahzada A. Hassan',
  headerTitle: 'Shahzada Ali Hassan - Top Web Analyst On Upwork',
  description:
    'A technical web analytics blog about Google Tag Manager and Google Analytics (other related stuff) created and constantly updated by Shahzada ALi Hassan',
  language: 'en-us',
  siteUrl: 'https://shahzadaalihassan.com',
  siteDomain: 'shahzadaalihassan.com',
  siteRepo: 'https://github.com/HassanAMZ/ShahzadaAliHassanV2',
  siteLogo: '/static/images/avatar.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/social-sharing.png',
  email: 'Reactjswebdev@gmail.com',
  github: 'https://github.com/HassanAMZ',
  twitter: 'https://twitter.com/shahzada_A',
  facebook: 'https://facebook.com/ShahzadaAliHassan',
  youtube: 'https://www.youtube.com/channel/UC8tapbraiwvk5nnQW0Eqh9g',
  linkedin: 'https://www.linkedin.com/in/hassanamz',
  upwork: 'https://www.upwork.com/freelancers/~015b35831b56606433',
  instagram: 'https://instagram.com/ShahzadaAliHassan_',
  locale: 'en-US',
  theme: 'light',
  analytics: {
    // supports plausible, simpleAnalytics or GoogleTagManager
    plausibleDataDomain: 'ShahzadaAliHassan.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleTagManagerID: 'GTM-MCKP7JK', // e.g. GTM-MCKP7JK
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'mailchimp',
  },

  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    //using giscus
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light_high_contrast',
      // theme when dark mode
      darkTheme: 'light_high_contrast',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
