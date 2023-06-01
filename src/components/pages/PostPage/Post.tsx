import React, { FC, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { IPost } from "../../../components/types";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";import CommentList from "../../CommentList/CommentList";
import { useOuside } from "../../hooks/useOutside";
import { fetchComments } from "../../../store/comment-service/actions";
interface IProps {
  props: IPost;
}

const Post: FC<IProps> = ({ props }) => {
  const dispatch = useDispatch();
  const { ref, isShow, setIsShow } = useOuside(false);

  useEffect(() => {
    dispatch(fetchComments(props.id));
  }, [dispatch, isShow, props.id]);

  return (
    <div style={{ marginBottom: "15px" }} ref={ref}>
      <Card>
        <Card.Header>
          <Link to={`/user/${props.userId}`}>
            <Image
              width={60}
              src="https://koshka.top/uploads/posts/2021-12/thumbs/1639918258_12-koshka-top-p-koshek-prikolnie-na-avatarku-13.jpg"
            ></Image>
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          {isShow ? (
            <Button onClick={() => setIsShow(false)} variant="outline-primary">
              Комментарии
            </Button>
          ) : (
            <Button onClick={() => setIsShow(true)} variant="outline-primary">
              Комментарии
            </Button>
          )}
          <div>{isShow && <CommentList />}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
