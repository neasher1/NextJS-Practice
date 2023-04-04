import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="text-center">

      <Head>
        <title>Home page</title>
      </Head>

      <div>
        {
          posts?.map(post => <div key={post.id} className="card mx-10 my-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.id}</h2>
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>)
        }
        <Link className="btn btn-primary" href="/posts">See More</Link>
      </div>



    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      posts: data
    }
  }

}
