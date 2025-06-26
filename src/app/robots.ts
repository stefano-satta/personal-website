import {MetadataRoute} from "next";
import myInfo from "@/utility/my-info";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '',
        },
        sitemap: `${myInfo.websiteUrl}/sitemap.xml`,
    }
}