import type { Metadata } from "next";
import { getBlogPosts } from "@/components/mdx/utils";
import { notFound } from "next/navigation";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import { CustomMDX } from "@/components/mdx/mdx";
import Cta from "@/components/cta";

export async function generateStaticParams() {
  const allBlogs = getBlogPosts();

  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, summary: description } = post.metadata;

  return {
    title,
    description,
  };
}

export default async function SinglePost(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Single article */}
            <div className="mx-auto max-w-3xl">
              <article>
                {/* Post header */}
                <header className="mb-8">
                  <h1 className="text-white pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                    {post.metadata.title}
                  </h1>
                  <div className="mx-auto mb-5 max-w-3xl">
                    <p className="text-lg text-gray-100/90">
                      {post.metadata.summary}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      {post.metadata.authorImg && (
                        <a href={post.metadata.authorLink}>
                          <Image
                            className="inline-flex shrink-0 rounded-full"
                            src={post.metadata.authorImg}
                            width={36}
                            height={36}
                            alt={post.metadata.author || ""}
                          />
                        </a>
                      )}
                      <div className="text-sm font-medium text-gray-200">
                        <span>{post.metadata.author}</span>
                        <span className="text-gray-700"> - </span>
                        <a
                          className="text-gray-100/75 transition-colors hover:text-orange-500"
                          href={post.metadata.authorLink}
                        >
                          {post.metadata.authorRole}
                        </a>
                      </div>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      <li>
                        <a
                          className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60"
                          href="#0"
                        >
                          <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                            {post.metadata.category}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </header>

                {/* Article image */}
                {post.metadata.image && (
                  <figure className="relative my-8 overflow-hidden rounded-2xl border border-gray-800/80">
                    <Image
                      className="aspect-video w-full object-cover"
                      src={post.metadata.image}
                      width={1024}
                      height={576}
                      alt={post.metadata.title}
                      priority
                    />
                  </figure>
                )}

                {/* Article content */}
                <div className="prose max-w-none text-gray-100/90 prose-headings:scroll-mt-24 prose-headings:font-nacelle prose-headings:font-semibold prose-headings:text-gray-200 prose-h2:mb-4 prose-h2:text-2xl prose-a:font-medium prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l prose-blockquote:border-orange-500 prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-orange-200/65 prose-figcaption:mt-3 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-600 prose-strong:font-medium prose-strong:text-gray-200 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-img:rounded-2xl md:prose-h2:text-3xl [&_blockquote_p:first-of-type]:before:content-none [&_blockquote_p:last-of-type]:after:content-none">
                  <CustomMDX source={post.content} />
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
