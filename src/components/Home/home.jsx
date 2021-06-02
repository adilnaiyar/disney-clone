import ImageSlider from "../Image-Slider/imageSlider";
import NewDisney from "../New-Disney/newDiseny";
import Originals from "../Originals/originals";
import Recommends from "../Recommends/recommends";
import Trendings from "../Trendings/trendings";
import Viwers from "../Viwers/viwers";
import { Container } from "./home.style";
const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viwers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

export default Home;
