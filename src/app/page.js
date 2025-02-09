import Content from "./home/components/Content";
import Slider from "./home/components/Slider";
import './home/css/home.scss';

export default function Home() {
  return (
    <div className="home container">
      <Content />

      <Slider />
    </div>
  );
}
