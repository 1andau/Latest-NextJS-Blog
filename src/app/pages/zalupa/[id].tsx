import { useRouter } from 'next/router';
import { postsData } from '../database';
import { NextPage } from 'next';

const FullPage: NextPage = () => {
  const { pathname, asPath } = useRouter();
  console.log(pathname, asPath);

  //   const router = useRouter();
  //   const { id } = router.query;

  //   const post = postsData.find((post:any) => post.id === id);

  //   if (!post) {
  //     return <div>Post not found</div>;
  //   }

  return (
    <div>

SMELLY ZALUPA
      {/* <h1>{post.title}</h1>
      <p>{post.date}</p> */}
    </div>
  );
};
export default FullPage;
