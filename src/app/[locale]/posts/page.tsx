import Post from "@/components/post";
import { posts } from "@/data/posts";
import { useTranslations } from "next-intl";
import React from "react";

const PostsPage = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-16 pt-36 pb-36">
      <div className="max-w-4xl mx-auto">
        {posts.length > 0 ? (
          <React.Fragment>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
              📝 {t("PostsPage.title")}
            </h1>

            <div className="grid grid-cols-1 gap-12">
              <Post />
            </div>
          </React.Fragment>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              😕 {t("PostsPage.noPostsFound")}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
