import React from "react";
import { classNames } from "@/styles/classNames";
import localFont from "next/font/local";

type MainLayoutProps = {
  px?: number;
  py?: number;
  children: React.ReactNode;
};

const MainLayout = ({ px = 0, py = 0, children }: MainLayoutProps) => {
  return (
    <main
      style={{
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
      }}
      className={classNames(
        "flex flex-col break-all items-center min-h-screen p-6 sm:p-12 md:p-20 lg:p-24 gap-8 md:gap-12"
      )}
    >
      {children}
    </main>
  );
};

export default MainLayout;
