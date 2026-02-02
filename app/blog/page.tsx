import { client } from "@/sanity/lib/client";
import BlogListClient from "./blogclient";

// Fetching logic
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "date": publishedAt,
    excerpt,
    author,
    "image": mainImage.asset->url,
    category
  }`;

  try {
    const data = await client.fetch(query);
    // If Sanity returns null, we default to an empty array []
    return data || [];
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return [];
  }
}

export default async function Page() {
  const blogs = await getPosts();

  // We pass the fetched blogs as a "prop" to the client component
  return <BlogListClient blogs={blogs} />;
}
