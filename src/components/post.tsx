import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = () => {
  return (
    <article className="p-4 sm:flex sm:space-x-4">
      <Link href="/posts" className="block sm:w-80">
        <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/600x400"
            alt="How To Setup And Use The Aerospace Tiling Window Manager On macOS"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex-1 py-2 sm:py-0">
        <Link href="/posts">
          <h3 className="mb-1 text-xl font-medium">
            How To Setup And Use The Aerospace Tiling Window Manager On macOS
          </h3>
          <p className="text-gray-60 font-light dark:text-gray-300">
            <span>Published:</span> <time>August 10, 2024</time>
          </p>
          <p className="py-2 font-light">
            Use this guide along with my youtube video to setup and use the
            aerospace tiling window manager on your Mac. Aerospace has been the
            best tiling window manager Ive tried on macOS after struggling with
            Yabai Amethyst.
          </p>
        </Link>
        <div className="flex space-x-4 font-light text-gray-600 underline dark:text-gray-300">
          <Link href="/posts">Read More</Link>
          <Link href="https://youtu.be/-FoWClVHG5g">Watch Video</Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
