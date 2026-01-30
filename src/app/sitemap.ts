import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://jakartavisa.agency',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add other routes here if you have more pages
    ];
}
