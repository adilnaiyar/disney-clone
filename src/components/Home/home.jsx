import ImageSlider from "../Image-Slider/imageSlider";
import Recommends from "../Recommends/recommends";
import Viwers from "../Viwers/viwers";
import { Container } from "./home.style";
const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viwers />
      <Recommends />
    </Container>
  );
};

export default Home;
