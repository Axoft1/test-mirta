import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/actions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Button, Spinner } from "react-bootstrap";
import Post from "./Post";
import { IPost } from "../types";

const PostPage = () => {
  const dispatch = useDispatch();
  const posts = useTypedSelector((state) => state.posts.posts);
  const loading = useTypedSelector((state) => state.app.loading);
  console.log(posts);

  useEffect(() => {
  dispatch(fetchPosts());
  }, [dispatch])

  if (loading) {
    return <Spinner animation="border" />;
  }
  //   if (!posts.length) {
  //     return <button
  //       className="btn btn-primary"
  //       onClick={() => dispatch(fetchPosts())}
  //     >Загрузить</button>
  //   }
  return (
    <div>      
      {posts.map((e: IPost) => (
        <Post key={e.id} props={e} />
      ))}
    </div>
  );
};

export default PostPage;
