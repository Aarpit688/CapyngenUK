import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import Banner6 from "../components/Banner6";
import { assets } from "../assets/assets";

const Blogs = () => {
  return (
    <div>
      <Banner6
        titleGradient="Blogs"
        description=""
        ctaText=""
        ctaLink="/contact-us"
        buttonBg="bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg shadow-lg border border-white/10 hover:from-blue-700 hover:to-blue-700 hover:shadow-emerald-500/20"
        bgImageDesktop={assets.cryptoExchange}
        bgImageMobile={assets.cryptoExchange}
        features={[
          {
            icon: ``,
            text: "",
          },
        ]}
      />
      <ArticleGrid />
    </div>
  );
};

export default Blogs;
