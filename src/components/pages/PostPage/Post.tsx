import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IPost } from "../../../components/types";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

interface IProps {
  props: IPost;
}

const Post: FC<IProps> = ({ props }) => {

  const getUser = (userId:number) => {

  };
  return (
    <ListGroup>
      <ListGroup.Item>
        <div>
          <Link to={`/user/${props.userId}`}>
          <Image
            onClick={() => getUser(props.userId)}
            width={60}
            src="https://koshka.top/uploads/posts/2021-12/thumbs/1639918258_12-koshka-top-p-koshek-prikolnie-na-avatarku-13.jpg"
          ></Image>
          </Link>
          <b>{props.title}</b>
        </div>
        <div>{props.body}</div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Post;
