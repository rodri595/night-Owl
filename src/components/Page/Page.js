import React from "react";

const Page = ({ isDarkMode, navbar, children }) => {
  return (
    <body data-theme={isDarkMode ? "dark" : "light"}>
      {navbar}
      <main>
        <div
          className="overflow-hidden position-relative"
          style={{ minHeight: "100vh" }}
        >
          {children}
        </div>
      </main>
    </body>
  );
};

export default Page;
