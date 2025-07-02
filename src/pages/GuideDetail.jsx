import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import { Helmet } from "react-helmet";

const GuideDetail = () => {
  const { slug } = useParams();
  const [guide, setGuide] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // 🔝 Scroll to top

    const fetchGuide = async () => {
      try {
        const { data } = await axios.get(`/guides/${slug}`);
        setGuide(data.guide);
      } catch (err) {
        setError("Guide not found or server error.");
        console.error(err);
      }
    };

    fetchGuide();
  }, [slug]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!guide) return <div>Loading...</div>;

  return (
    <>
      {/* ✅ Dynamic SEO Helmet */}
<Helmet>
  <title>{guide.title} | Tech Buying Guide - TechTrendyDeals</title>
  <meta name="description" content={guide.metaDescription} />
  <link
    rel="canonical"
    href={`https://www.techtrendydeals.com/guides/${guide.slug}`}
  />
  {/* ✅ JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${guide.title}",
      "description": "${guide.metaDescription}",
      "url": "https://www.techtrendydeals.com/guides/${guide.slug}",
      "datePublished": "${guide.createdAt || new Date().toISOString()}",
      "author": {
        "@type": "Organization",
        "name": "TechTrendyDeals"
      }
    }
    `}
  </script>
</Helmet>


      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-8 py-6">
        {/* Left Sidebar */}
        <aside className="hidden md:block md:col-span-2">
          <div className="bg-gray-100 h-full rounded p-2 text-center text-sm text-gray-500">
            <p>Ad Space</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-12 md:col-span-8">
          <h1 className="text-3xl font-bold text-gray-800">{guide.title}</h1>
          <p className="text-gray-600 mt-2 text-base">{guide.metaDescription}</p>

          {/* HTML content block */}
          <div
            className="mt-4 prose prose-sm sm:prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />

          <div className="mt-6">
            {guide.products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 my-6 shadow-md rounded-md flex flex-col relative"
              >
                {/* 🛒 Top Right Buy Button */}
                {product.affiliateLink && (
                  <div className="absolute top-2 right-2">
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm py-1 px-3 rounded"
                    >
                      Buy Now on Amazon
                    </a>
                  </div>
                )}

                {/* 🖼️ Product Image */}
                {product.affiliateLink ? (
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full max-h-[400px] object-contain rounded mt-4 border hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-h-[400px] object-contain rounded mt-4 border"
                  />
                )}

                {/* 🔤 Product Info */}
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.rank}. {product.name}
                  </h2>
                  <p className="text-lg mt-2 text-gray-700">{product.verdict}</p>

                  <ul className="text-green-700 list-disc list-inside mt-2">
                    {product.pros.map((pro, i) => (
                      <li key={i}>✔️ {pro}</li>
                    ))}
                  </ul>

                  <ul className="text-red-600 list-disc list-inside mt-1">
                    {product.cons.map((con, i) => (
                      <li key={i}>❌ {con}</li>
                    ))}
                  </ul>

                  {/* 📦 CTA Button */}
                  {product.affiliateLink ? (
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Best Deal on Amazon
                    </a>
                  ) : (
                    <p className="mt-2 text-blue-600 font-semibold">
                      Affiliate: Coming soon
                    </p>
                  )}
                </div>

                {/* 📱 Sticky Mobile Buy CTA */}
                {product.affiliateLink && (
                  <div className="fixed bottom-4 right-4 z-50 md:hidden">
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow-lg"
                    >
                      Buy Now on Amazon
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:block md:col-span-2">
          <div className="bg-gray-100 h-full rounded p-2 text-center text-sm text-gray-500">
            <p>Ad Space</p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default GuideDetail;
