import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../../../store/user-service/actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IPost, IUser } from "../../types";
import Post from "../PostPage/Post";

const UserPage = () => {
  const user = useTypedSelector((state): IUser => state.user.user);
  const userPosts = useTypedSelector((state): IUser => state.user.userPosts);
  const loading = useTypedSelector((state): boolean => state.user.loading);

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(params.id));
  }, [dispatch, params]);

  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <>
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        children="Go back"
      />
      <div>
        <h1>{user.name}</h1>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4" sm="auto">
            <Card style={{ width: "18rem", marginBottom: "10px"}}>
              <Card.Img
                variant="top"
                src="https://koshka.top/uploads/posts/2021-12/thumbs/1639918258_12-koshka-top-p-koshek-prikolnie-na-avatarku-13.jpg"
              />
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>{`${user.name}`}</Card.Text>
                <Card.Text>{`Tel.: ${user.phone}`}</Card.Text>
                <Card.Text>{`Website: ${user.website}`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="7" sm="auto">
            {userPosts &&
              userPosts.map((e: IPost) => <Post key={e.id} props={e} />)}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPage;
