import useEstate from '../hook/useEstate';

const BuildingPost = () => {
  const { PostResults } = useEstate(
    'https://marufukusansyou.com/wp-json/wp/v2/property?figure=16',
  );

  return (
    <a href={PostResults.postLink} className="w-full">
      <img
        src={PostResults.postImage}
        alt="中古物件サムネイル"
        className="w-full"
      />
      <p>{PostResults.postTitle}</p>
    </a>
  );
};

export default BuildingPost;
