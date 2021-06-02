import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./recommends.style";

const Recommends = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
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

export default Recommends;
