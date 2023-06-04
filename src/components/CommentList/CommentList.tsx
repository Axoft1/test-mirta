import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ListGroup, Spinner } from "react-bootstrap";
import { IComment } from "../types";

const CommentList = () => {
  const comment = useTypedSelector((state) => state.comment.comment);
  const loading = useTypedSelector((state): boolean => state.comment.loading);
  const error = useTypedSelector(
    (state): null | string => state.comment.saveErrorComment
  );

  if (loading) {
    return <Spinner animation="border" />;
  }
  if (error) {
    return <div>Ошибка сервера</div>;
  }
  return (
    <div>
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
