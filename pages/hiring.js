import Header from "../components/Header";
import axios from "axios";
import Link from "next/link";

export default function Hiring({ list }) {
  return (
    <div className="container">
      <Header />
      <h1>Hiring</h1>
      {list.length &&
        list.slice(0, 10).map(item => (
          <Link key={item.id} href={`/detail-static/${item.id}`}>
            <a>
              <li>{item.title}</li>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = res;

    return {
      props: {
        list: data,
      },
    };
  } catch (e) {
    console.error(e);
  }
}
