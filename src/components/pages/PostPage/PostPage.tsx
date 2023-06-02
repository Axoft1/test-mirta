import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../../store/post-service/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Pagination, Spinner } from "react-bootstrap";
import Post from "./Post";
import { IPost } from "../../types";
import Select from "../../Select/Select";
import Search from "../../Search/Search";

const PostPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const posts = useTypedSelector((state): IPost[] => state.posts.posts);

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort as keyof IPost].localeCompare(
          b[selectedSort as keyof IPost]
        )
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    if (searchQuery) {
      setShow(false);
    } else {
      setShow(true);
    }
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const totalPage = useTypedSelector((state): number => state.posts.totalPage);
  const loading = useTypedSelector((state): boolean => state.posts.loading);
  const error = useTypedSelector((state): boolean => state.posts.saveError);

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
  };
 
  useEffect(() => {
    dispatch(fetchPosts(10, page));
  }, [dispatch, page]);

  if (loading) {
    return <Spinner animation="border" />;
  }
  if (error) {
    return <div>Ошибка сервера</div>;
  }
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <Search
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={"Search"}
          // submit={submit}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Select
          value={selectedSort}
          onChange={sortPost}
          defaultValue={"Sorting"}
          optons={[
            { value: "title", name: "By name" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
      <div>
        {sortedAndSearchedPosts &&
          sortedAndSearchedPosts.map((e: IPost) => (
            <Post key={e.id} props={e} />
          ))}
      </div>
      <div>{show && <Pagination>{items}</Pagination>}</div>
    </div>
  );
};

export default PostPage;
