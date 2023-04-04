import Post from "@/Components/Post/Post";

const index = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            <h2 className="text-3xl">Post length {posts.length}</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default index;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();
    console.log(data);

    return {
        props: {
            posts: data
        }
    }

}