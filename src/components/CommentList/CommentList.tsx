import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ListGroup, Spinner } from "react-bootstrap";
import { IComment } from "../types";

const CommentList = () => {
  const comment = useTypedSelector((state) => state.comment.comment);
  const loading = useTypedSelector((state) => state.comment.loading);

  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div >
      {comment.map((e: IComment) => (
        <ListGroup key={e.id}>
          <ListGroup.Item>{e.email}</ListGroup.Item>
          <ListGroup.Item>{e.body}</ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
};

export default CommentList;
