import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CompareDetails = () => {
  const { slug } = useParams();
  const title = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <Helmet>
        <title>{title} | SmartCompare</title>
        <meta name="description" content={`Detailed comparison blog of ${title}`} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 capitalize">{title}</h1>
      <p className="text-gray-700 leading-7">
        This is the detailed comparison blog for <strong>{title}</strong>. You can include specs tables, camera samples, performance charts, pros & cons, and conclusion here.
      </p>
    </div>
  );
};

export default CompareDetails;
