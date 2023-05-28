import React, { FC, useState } from "react";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import { IPost } from "../../../components/types";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../../store/post-service/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CommentList from "./CommentList";
interface IProps {
  props: IPost;
}

const Post: FC<IProps> = ({ props }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  
  const loading = useTypedSelector((state) => state.comment.loading);
  //  console.log(comment);

  const getComment = (id: number) => {
    setShow(!show);
    dispatch(fetchComments(id));
  };

  return (
    <ListGroup>
      <ListGroup.Item>
        <div>
          <Link to={`/user/${props.userId}`}>
            <Image
              width={60}
              src="https://koshka.top/uploads/posts/2021-12/thumbs/1639918258_12-koshka-top-p-koshek-prikolnie-na-avatarku-13.jpg"
            ></Image>
          </Link>
          <b>{props.title}</b>
        </div>
        <div>{props.body}</div>
        <Button onClick={() => getComment(props.id)} variant="outline-primary">
          Комментарии
        </Button>
        {show && <CommentList />}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Post;
