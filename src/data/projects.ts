export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  headerImage: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'Mawoopets',
    description:
      'A full-stack e-commerce platform connecting certified dog breeders with customers across the US and Canada.',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js and TypeScript. It includes product management, a persistent shopping cart, Stripe integration for payments, and an admin panel for managing inventory and orders. Optimized for SEO and performance with Server-Side Rendering.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'Sass',
      'Node.js',
      'Express',
      'GraphQL',
      'AWS',
      'MySQL',
      'Sequelize',
    ],
    liveUrl: 'https://www.mawoopets.com/',
    githubUrl: 'https://github.com',
    image: '/images/mawoopets_small.webp',
    headerImage: '/images/mawoopets_header.webp',
    features: [
      'Persistent shopping cart',
      'Stripe payments',
      'Admin panel',
      'SEO optimization',
      'Responsive design',
    ],
  },
  {
    slug: 'influencer-market-cap',
    title: 'XCAD Network - Influencer Market Cap',
    description:
      'A platform for tracking and analyzing the market value of tokenized influencers within the XCAD ecosystem.',
    longDescription:
      'Influencer Market Cap is a data-driven platform that provides insights into the value and performance of tokenized creators within the XCAD ecosystem. As a Frontend Developer, I worked on building data visualization interfaces and dashboards using React and modern frontend tools. My contributions focused on presenting complex blockchain and financial data in a clear, accessible way. I helped develop components that display token metrics, rankings, and trends, enabling users to better understand the performance and market dynamics of creator tokens.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'TanStack Query',
      'Ethers.js',
      'Recharts',
      'Tailwind CSS',
    ],
    liveUrl: 'https://influencermarketcap.com/',
    githubUrl: 'https://github.com',
    image: '/images/influencermarketcap-small.webp',
    headerImage: '/images/influencermarketcap-header.webp',
    features: [
      'Real-time token metrics',
      'Interactive charts & rankings',
      'Blockchain data integration',
      'Responsive design',
      'Creator performance analytics',
    ],
  },
  {
    slug: 'xcad-site',
    title: 'XCAD Network - Site',
    description:
      'Official website for XCAD Network, a Web3 platform enabling creators to tokenize their audiences and reward engagement.',
    longDescription:
      'XCAD Network is a blockchain-based platform that allows content creators to tokenize their audiences and build new monetization models through fan engagement. As a Frontend Developer, I worked on the main website using React and Next.js, contributing to the development of responsive, high-performance user interfaces. My work focused on building core pages, improving UI consistency, and ensuring a smooth and engaging user experience across devices. I collaborated closely with designers and product teams to translate complex Web3 concepts into intuitive interfaces accessible to a broader audience.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'GSAP',
      'Radix UI',
      'Recharts',
      'Tailwind CSS',
      'Swiper',
    ],
    liveUrl: 'https://www.xcadnetwork.com/',
    githubUrl: 'https://github.com',
    image: '/images/xcadnetwork-web-small.webp',
    headerImage: '/images/xcadnetwork-web-header.webp',
    features: [
      'Smooth animations with GSAP',
      'Interactive data visualizations',
      'Accessible UI components',
      'Responsive design',
      'High-performance rendering',
    ],
  },
  {
    slug: 'xcad-browser-extension',
    title: 'XCAD Network - Browser Extension',
    description:
      'XCAD Network is enabling the #Watch2Earn revolution by allowing fans to earn Creator tokens for watching their favourite Creators, directly on YouTube.',
    longDescription:
      'XCAD Network is enabling the #Watch2Earn revolution by allowing fans to earn Creator tokens for watching their favourite Creators, directly on YouTube. The XCAD browser extension allows viewers to earn Creator tokens while watching their favourite Creators. Viewers can earn, view and trade Creator tokens all via the XCAD plugin. The plugin works in the background while you watch videos on YouTube. Viewers who have installed the XCAD plugin will be rewarded with the Creator tokens when they watch 80% or more of a video. Creator tokens can be used to vote on polls put out by their favourite Creators, the more tokens a viewer holds, the more weight their vote carries. This means the most loyal fans have the most say in a Creators Content. Furthermore, viewers are able to stake their Creator tokens with XCAD to get a multiplier on the rewards they earn from watching videos. The XCAD Network browser extension powers the Watch-to-Earn ecosystem by allowing users to earn Creator tokens directly while watching YouTube videos. As a Frontend Developer, I worked on building and maintaining the extension interface using React and modern JavaScript tools. My contributions included developing user interaction flows, integrating wallet connections, and implementing token-related features such as earning, tracking, and staking rewards. The extension operates seamlessly in the background, rewarding users based on engagement while providing an intuitive interface for managing tokens, participating in creator polls, and interacting with the broader XCAD ecosystem.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Nx',
      'Capacitor',
      'Ionic',
      'Redux Toolkit',
      'TanStack Query',
      'WalletConnect',
      'Tailwind CSS',
    ],

    liveUrl:
      'https://chromewebstore.google.com/detail/xcad-network/elcdacbfpnjajikgpenambffmmoimeea',
    githubUrl: 'https://github.com',
    image: '/images/extension-small.webp',
    headerImage: '/images/extension-header.webp',
    features: [
      'Multi-platform support (Web, iOS, Android)',
      'Browser extension & mobile apps',
      'Wallet integration',
      'Real-time token tracking',
      'Push notifications',
    ],
  },
  {
    slug: 'xcad-social',
    title: 'XCAD Network - Social',
    description:
      'An AI Influencer is a virtual persona powered by AI. In XCAD Social, you can launch your own AI Creator where the whole community can generate content, create images, and trade it together.',
    longDescription:
      'XCAD Social is an innovative platform that allows users to create and engage with AI-powered influencers. These virtual creators enable communities to collaboratively generate content, produce images, and participate in a shared creative economy. As a Frontend Developer, I contributed to building interactive user interfaces using React and Next.js, focusing on usability and performance. My work involved developing dynamic features for content creation, user interaction, and real-time feedback within the platform. The goal was to make complex AI-driven workflows feel intuitive and engaging, allowing users to seamlessly create, explore, and interact with AI-generated content',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Privy Auth',
      'Ably',
      'Redux Toolkit',
      'TanStack Query',
      'Framer Motion',
      'Viem',
      'Tailwind CSS',
    ],
    liveUrl: 'https://www.xcad.social/en',
    githubUrl: 'https://github.com',
    image: '/images/xcad-social-small.webp',
    headerImage: '/images/xcad-social-header.webp',
    features: [
      'AI content generation',
      'Real-time collaboration (Ably)',
      'Web3 authentication (Privy)',
      'PWA support',
      'Responsive design',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
