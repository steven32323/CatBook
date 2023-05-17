const NewPost = () => {
  const postSubmitHandler = () => {};

  return (
    <form onSubmit={postSubmitHandler}>
      <input type="text" placeholder="What's on your mind?" />
      <button>Post</button>
    </form>
  );
};
export default NewPost;
