import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen dark:bg-black dark:text-white pt-24">
      <div className="container max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dark Page</h1>
        <p className="text-lg">
          This is a basic page with a black background and white text.
        </p>
        <p className="mt-4">
          Feel free to add more content here. The header and footer have their
          own background styling, so they won't be affected by this page's
          background.
        </p>
      </div>
    </div>
  );
};

export default Page;
