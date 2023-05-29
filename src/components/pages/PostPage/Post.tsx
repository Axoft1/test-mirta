import React, { FC, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { IPost } from "../../../components/types";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../../store/post-service/actions";
import CommentList from "../../CommentList/CommentList";
import { useOuside } from "../../hooks/useOutside";
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
    <ListGroup ref={ref}>
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
        <div></div>
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
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Post;
