import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.jakartavisas.agency';
    const lastModified = new Date();

    const regionalRoutes = [
        '/visa-indonesia',
        '/visa-bali',
        '/visa-jakarta',
        '/visa-lombok',
        '/visa-surabaya',
        '/visa-jogja',
        '/visa-manado',
        '/visa-banten',
        '/visa-tangerang',
        '/indonesia-visa',
        '/indonesian-visa',
        '/jakarta-visa',
        '/jakarta-visas',
        '/visa-jakarta-indonesia',
    ];

    const sitemapRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/site-map`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        ...regionalRoutes.map(route => ({
            url: `${baseUrl}${route}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        })),
    ];

    return sitemapRoutes;
}
