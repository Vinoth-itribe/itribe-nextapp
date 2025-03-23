import { getBlogPosts } from "@/components/mdx/utils";
import CategoryProvider from "./category-provider";
import PageIllustration from "@/components/page-illustration";
import BlogFilters from "./filters";
import PostItem from "@/app/(default)/portfolio/post-item";

export const metadata = {
  title: "Portfolio - Inboundtribe",
  description: "Check out our creative work, successful campaigns, and the magic we’ve made for awesome brands.",
};

import Cta from "@/components/cta";
import Pagination from "./pagination";

export default function Blog() {
  const allBlogs = getBlogPosts();

  // Sort posts by date
  allBlogs.sort((a, b) => {
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1;
  });

  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="text-white pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Our work
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-gray-100/70">
                See how we craft stunning websites, bold branding, engaging videos, and high-impact ads. 
                We help creators, influencers, non-profits, and SMEs stand out.
                </p>
              </div>
            </div>
            <div>
              <CategoryProvider>
                {/* Buttons */}
                <BlogFilters />

                {/* Articles */}
                <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
                  {allBlogs.map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>
              </CategoryProvider>

              {/* Pagination */}
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
