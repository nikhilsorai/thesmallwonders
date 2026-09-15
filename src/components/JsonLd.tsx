export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Small Wonders',
    url: 'https://thesmallwonders.com',
    logo: 'https://thesmallwonders.com/assets/images/logo/logo.png',
    description:
      'Small Wonders helps founder-led companies grow without spending their people to do it. Bengaluru, India · working across India and the UAE.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Ekta Das',
      jobTitle: 'Founder',
      description:
        'Fifteen years with CXOs, founders and teams across industries. Specialist in human-centred leadership, goal alignment, and the LEAP framework.',
    },
    sameAs: ['https://www.linkedin.com/'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  author = 'Ekta Das',
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Small Wonders',
      url: 'https://thesmallwonders.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
