import React from "react";

export default function Blogs() {
  return (
    <div>
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
      <div className="container py-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative w-full aspect-square overflow-hidden group">
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-125"
              style={{
                backgroundImage:
                  'url("https://wordpresscdn.winzogames.com/prod/blog/wp-content/uploads/2025/04/21071830/KKR-vs-GT-Fantasy-Team-696x398.jpg")',
              }}
            ></div>

            <div className="relative z-10 flex items-center justify-center h-full text-white text-2xl font-bold">
              Your content here
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-red-700 h-32 w-full"></div>
            <div className="bg-green-700 h-32 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
