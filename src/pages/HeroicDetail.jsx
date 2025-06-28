import React from 'react';
import { Helmet } from 'react-helmet'; // ✅ Import Helmet
import Guides from './Guides';

const HeroicDetail = () => {
  return (
    <>
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>In-Depth Tech Guides & Buying Advice | TechTrendyDeals</title>
        <meta
          name="description"
          content="Explore expert-reviewed buying guides and product reviews for smartphones, laptops, earbuds, and more. Make smart tech decisions with TechTrendyDeals."
        />
        <meta
          name="keywords"
          content="tech guides, smartphone reviews, laptop buying advice, earbuds comparison, best tech under budget"
        />
        <link rel="canonical" href="https://www.techtrendydeals.com/heroic-detail" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-1 text-center">
          Tech Trendy Deals – In-Depth Reviews & Expert Buying Guides
        </h1>

        <section className="mb-2 text-center text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
          <p>
            Discover comprehensive and honest reviews, expert opinions, and detailed buying
            guides on the latest gadgets including smartphones, laptops, earbuds, and more.
            Our mission is to help you make informed and smart buying decisions with trusted insights.
          </p>
        </section>

        <hr className="border-gray-300 mb-0" />
      </main>

      {/* Guide Section - full width */}
      <section
        aria-label="Guides Section"
        className="bg-white rounded-none shadow-lg p-10 w-full"
        style={{ margin: 0 }}
      >
        <Guides />
      </section>
    </>
  );
};

export default HeroicDetail;

