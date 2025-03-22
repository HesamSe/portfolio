import Link from "next/link";
import { formatDate } from "app/lib/posts";
import BlogData from "./blog-data";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Our Blog</h1>
      <div>
        {BlogData
          .sort((a, b) => {
            if (
              a.publishedDate >
              b.publishedDate
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.source}
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              href={post.source}
              target='_blank'
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white">
                  {post.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.publishedDate, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
