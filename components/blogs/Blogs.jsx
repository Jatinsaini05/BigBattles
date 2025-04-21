import React from "react";

export default function Blogs() {
  return (
    <div className="h-60 relative">
      <img
        src="/blogtitle.jpg"
        alt="Blog Title"
        className="absolute inset-0 w-full h-full object-top object-cover z-0"
      />
      <h1 className="absolute z-10 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 text-[#2c4d7dcd] text-4xl font-bold">
        OUR BLOGS
      </h1>
    </div>
  );
}
