const Post = ({ post }) => {
    console.log(post);
    return (
        <div className="card bg-base-100 shadow-xl mt-10">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Post;