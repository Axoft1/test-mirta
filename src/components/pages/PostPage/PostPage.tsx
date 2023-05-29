import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../../store/post-service/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Spinner } from "react-bootstrap";
import Post from "./Post";
import { IPost } from "../../types";

const PostPage = () => {
  const dispatch = useDispatch();
  const posts = useTypedSelector((state) => state.posts.posts);
  const loading = useTypedSelector((state) => state.posts.loading);
  // console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      {posts.map((e: IPost) => (
        <Post key={e.id} props={e} />
      ))}
    </div>
  );
};

export default PostPage;
