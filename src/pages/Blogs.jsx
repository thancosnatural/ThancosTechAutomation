import React from "react";

export default function BlogsSection({ posts = DEFAULT_POSTS, title = "Blogs" }) {
  if (!posts || posts.length === 0) return null;
  const [featured, ...rest] = posts;
  return (
    <section className="w-full bg-[#0d0d0f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-10">
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>

        {/* Featured */}
        <FeaturedCard post={featured} />

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ post }) {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#131316] ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
      <div className="grid grid-cols-1 gap-0 p-3 sm:p-4 md:grid-cols-[260px_1fr] md:gap-4">
        {/* image */}
        <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
          <img
            src={post.image}
            alt={post.title}
            className="block h-full w-full object-cover md:aspect-[4/3]"
            loading="lazy"
          />
          <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium ring-1 ring-white/15">
            {post.category}
          </span>
        </div>

        {/* content */}
        <div className="flex min-w-0 flex-col justify-center px-1 py-2 md:px-0">
          <h3 className="line-clamp-2 text-[15px] font-semibold sm:text-base">{post.title}</h3>
          <p className="mt-2 text-[11px] text-white/60">Posted on {formatDate(post.date)}</p>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-xl bg-[#131316] ring-1 ring-white/10">
      <div className="relative">
        <img src={post.image} alt={post.title} className="block h-auto w-full object-cover aspect-video" loading="lazy" />
        <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium ring-1 ring-white/15">
          {post.category}
        </span>
      </div>
      <div className="px-3 pb-3 pt-2">
        <h4 className="line-clamp-2 text-[13.5px] font-semibold sm:text-sm">{post.title}</h4>
        <p className="mt-1 text-[11px] text-white/60">Posted on {formatDate(post.date)}</p>
      </div>
    </article>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const DEFAULT_POSTS = [
  {
    id: "f1",
    category: "AI in UX Design",
    title: "AI in UX Design: Embracing Change and Enhancing User Experiences",
    date: "2024-06-04",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
  },
  // grid items
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `p${i + 1}`,
    category: "AI in UX Design",
    title: "Designing for Emotion: The Role of UX in Customer Loyalty",
    date: "2024-06-04",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
  })),
];

/* Usage
<BlogsSection />

// Or pass your own posts
<BlogsSection posts={[{ id: '1', category: 'News', title: 'Hello', date: '2025-01-01', image: '/img.jpg' }]} />
*/
