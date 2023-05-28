import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Spinner } from "react-bootstrap";

const CommentList = () => {
  const comment = useTypedSelector((state) => state.comment);
  const loading = useTypedSelector((state) => state.comment.loading);
  console.log(comment);
  if (!comment) {
    return <Spinner animation="border" />;
  }
  return <div>{comment.comment.map(e => <div>{e.name}</div>)}</div>;
};

export default CommentList;
