import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allPosts = await getCollection("posts");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'A blog project to learn Astro',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}