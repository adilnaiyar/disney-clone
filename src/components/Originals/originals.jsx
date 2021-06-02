import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./originals.style";
const Originals = () => {
  return (
    <Container>
      <h4>Originals</h4>
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

export default Originals;
