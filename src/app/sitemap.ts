import {MetadataRoute} from "next";
import myInfo from "@/utility/my-info";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${myInfo.websiteUrl}`,
            lastModified: new Date(),
            priority: 1,
            alternates: {
                languages: {
                    it: `${myInfo.websiteUrl}/it`,
                    en: `${myInfo.websiteUrl}/en`,
                },
            },
        },
        {
            url: `${myInfo.websiteUrl}/about`,
            lastModified: new Date(),
            priority: 0.8,
            alternates: {
                languages: {
                    it: `${myInfo.websiteUrl}/it/about`,
                    en: `${myInfo.websiteUrl}/en/about`,
                },
            },
        },
        {
            url: `${myInfo.websiteUrl}/links`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
};