import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchPosts,
  searchPosts,
  sortPosts,
} from "../../../store/post-service/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button, Form, Pagination, Spinner } from "react-bootstrap";
import Post from "./Post";
import { IPost } from "../../types";
import Select from "../../Select/Select";
import Search, { YourFormElement } from "../../Search/Search";

const PostPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const posts = useTypedSelector((state) => state.posts.defPosts);
  const totalPage = useTypedSelector((state) => state.posts.totalPage);
  const loading = useTypedSelector((state) => state.posts.loading);

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

  const sortPost = (sort: string) => {
    setSelectedSort(sort);
    dispatch(sortPosts());
  };
  const submit = (el: any) => {
    el.preventDefault();
    // posts.filter(e => e.title.includes(searchQuery)) 
    dispatch(searchPosts(searchQuery));
    // setPostss(postss.filter((e) => e.title.includes(el.target[0].value)));
  };
  // useEffect(() => {
  //   setPostss(posts);
  // }, [posts]);
  useEffect(() => {
    dispatch(fetchPosts(10, page));
  }, [dispatch, page]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <div>
        <Search
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={"Search"}
          submit={submit}
        />
      </div>
      <div>
        <Select
          value={selectedSort}
          onChange={sortPost}
          defaultValue={"Sorting"}
          optons={[{ value: "title", name: "By name" }]}
        />
      </div>
      <div>
        {posts && posts.map((e: IPost) => <Post key={e.id} props={e} />)}
      </div>
      <div>
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};

export default PostPage;
