import style from "../../styles/comments.module.css";

const Comments = ({ comments }) => {
    console.log(comments);
    return (
        <div className={style.box}>
            <h2 className="text-3xl">Total Comments: {comments.length}</h2>
            {
                comments.map(comment => <p>{comment.name}</p>)
            }
        </div>
    );
};

export default Comments;

//Server Side Rendering (SSR)
export const getServerSideProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
    const data = await res.json();

    return {
        props: {
            comments: data
        }
    }

}