import React from "react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full bg-black bg-[radial-gradient(circle_at_50%_50%,rgba(120,81,255,0.15),rgba(0,0,0,0))] animate-pulse-slow"></div>
      <div className="max-w-[90%] min-h-screen relative mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
