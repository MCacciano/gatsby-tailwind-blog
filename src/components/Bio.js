import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from './Image';

const Bio = () => {
  const occupations = ['Web Developer', 'Content Creator'];

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <div className="flex flex-col max-w-2xl border border-gray-500 rounded shadow p-4 mt-8">
      <div className="flex">
        <Image className="w-10 h-10 flex-shrink-0" />
        <div className="flex flex-col items-start pl-2 font-rubik">
          <h2 className="md:text-lg lg:text-xl font-medium">
            {data.site.siteMetadata.author}
          </h2>
          <ul className="flex text-xs font-thin">
            {occupations.map((occupation, i) => (
              <li>
                {occupations.length - 1 === i
                  ? `${occupation}`
                  : `${occupation},`}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum
        enim pariatur voluptas iusto non quo fugit deleniti illum expedita
        dolore, soluta atque quam magni, fugiat veritatis quaerat vel corporis.
      </p>
    </div>
  );
};

export default Bio;
