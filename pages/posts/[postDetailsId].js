import { useRouter } from "next/router";

const PostDetailsId = ({ post }) => {

    const router = useRouter();
    const handleBack = () => {
        router.push("/posts");
    }

    return (
        <div className="card mx-10 my-10 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post.id}</h2>
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning" onClick={handleBack}>Back to my posts</button>
                </div>
            </div>
        </div>
    );
};


//static site generation (SSG)
export const getStaticProps = async (context) => {
    // console.log(context);
    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postDetailsId}`);
    const data = await res.json();
    console.log(data);

    return {
        props: {
            post: data
        }
    }

}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: {
                postDetailsId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export default PostDetailsId;