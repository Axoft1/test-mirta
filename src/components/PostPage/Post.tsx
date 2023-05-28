import React, { FC } from 'react'
import { ListGroup } from 'react-bootstrap'
import { IPost } from '../types';

interface IProps {
  props: IPost;
}

const Post :FC<IProps> = ({ props }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <div>
          <b>{props.title}</b>
        </div>
        <div>{props.body}</div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Post