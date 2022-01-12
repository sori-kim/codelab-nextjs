import axios from "axios";

export default function Detail({ item }) {
  return (
    <div className="detail">
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <p>{item.id}번째 게시글</p>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
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
