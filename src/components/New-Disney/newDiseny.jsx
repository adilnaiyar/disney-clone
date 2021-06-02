import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./newDisney.style";
const NewDisney = () => {
  return (
    <Container>
      <h4>New Disney</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-pixar.png" alt=""></img>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-pixar.png" alt=""></img>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-pixar.png" alt=""></img>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="/images/viewers-pixar.png" alt=""></img>
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default NewDisney;
