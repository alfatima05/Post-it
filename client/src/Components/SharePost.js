import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";

const SharePosts = () => {
  return (
    <>
      <h1>SharePosts</h1>
      <Container>
        <Row>
          <Col>
            <Input
              id="share"
              name="share"
              placeholder="Share your thoughts..."
              type="textarea"
            />

            <Button>PostIT</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SharePosts;
