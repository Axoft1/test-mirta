import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts, searchComment } from "../../../store/post-service/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button, Form, Pagination, Spinner } from "react-bootstrap";
import Post from "./Post";
import { IPost } from "../../types";

const PostPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const posts = useTypedSelector((state) => state.posts.posts);
  const totalPage = useTypedSelector((state) => state.posts.totalPage);
  const loading = useTypedSelector((state) => state.posts.loading);
  console.log(totalPage);

  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPage(number)}
        key={number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }
// const ww = (e) => {
//   console.log(e);
  
// }
  const submit = (e: any) => {
    e.preventDefault();
    dispatch(searchComment(e.target[0].value));
  };

  useEffect(() => {
    dispatch(fetchPosts(10, page));
  }, [dispatch, page]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <div>
        <Form className="d-flex" onSubmit={submit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
      </div>
      <div>
        <Pagination >{items}</Pagination>
      </div>
      <div>
        {posts && posts.map((e: IPost) => <Post key={e.id} props={e} />)}
      </div>
    </div>
  );
};

export default PostPage;
