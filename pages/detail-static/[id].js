import axios from "axios";
import { useRouter } from "next/router";

export default function DetailStatic({ item }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading....</div>;
  }

  return (
    <div className="detail">
      <div>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
        <p>{item.id}번째 게시글</p>
      </div>
    </div>
  );
}

export async function getStaticPaths(ctx) {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.id;
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const { data } = res;
    return {
      props: {
        item: data,
      },
    };
  } catch (e) {
    console.error(e);
  }
}
