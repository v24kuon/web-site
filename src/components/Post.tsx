import { useState, useEffect } from 'react';
type ResultsStateType = {
  buildingLink: string;
  buildingTitle: string;
  buildingImage: string;
};

const Post = () => {
  const [results, setResults] = useState<ResultsStateType>({
    buildingLink: '',
    buildingTitle: '',
    buildingImage: '',
  });
  useEffect(() => {
    const getPost = () => {
      fetch('https://marufukusansyou.com/wp-json/wp/v2/property?figure=16')
        .then((res) => res.json())
        .then((data) => {
          setResults({
            buildingLink: data[0].link,
            buildingTitle: data[0].title.rendered,
            buildingImage: data[0].thumbnail_url,
          });
        });
    };
    getPost();
  }, []);
  return (
    <>
      <a href={results.buildingLink} className="text-red-400">
        リンク
      </a>
    </>
  );
};

export default Post;
