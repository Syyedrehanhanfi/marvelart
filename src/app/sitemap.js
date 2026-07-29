export default function sitemap() {
  const WEBSITE_URL = 'https://www.mehndimarvel.com';

  return [
    {
      url: `${WEBSITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
