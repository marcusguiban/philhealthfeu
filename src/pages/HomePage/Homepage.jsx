import {  React} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "../Utilities/navbar";
import { Footer } from "../Utilities/footer";
import { Container, Stack } from "@mui/material";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import carousel4 from "../../images/carousel4.jpg";
import carousel5 from "../../images/carousel5.jpg";
import carousel6 from "../../images/carousel6.jpg";
import carousel7 from "../../images/carousel7.jpg";
import carousel8 from "../../images/carousel8.jpg";
import carousel9 from "../../images/carousel9.jpg";
import carousel10 from "../../images/carousel10.jpg";
import carousel11 from "../../images/carousel11.jpg";
import carousel12 from "../../images/carousel12.jpg";
import carousel13 from "../../images/carousel13.jpg";
import carousel14 from "../../images/carousel14.jpg";

export const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,    
        autoplay: true,       
        autoplaySpeed: 3000,
        arrows: true,
      };

  return (
    <>
    <Navbar />
    <Container>
    <Slider {...sliderSettings}>
  <img src={carousel1} alt=""/>
  <img src={carousel2} alt=""/>
  <img src={carousel3} alt=""/>
  <img src={carousel4} alt=""/>
  <img src={carousel5} alt=""/>
  <img src={carousel6} alt=""/>
  <img src={carousel7} alt=""/>
  <img src={carousel8} alt=""/>
  <img src={carousel9} alt=""/>
  <img src={carousel10} alt=""/>
  <img src={carousel11} alt=""/>
  <img src={carousel12} alt=""/>
  <img src={carousel13} alt=""/>
  <img src={carousel14} alt=""/>


        </Slider>

<Stack className="home-container" flexDirection={"row"}>
    <div className="container1">
        <h1>Article 1</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloribus saepe cumque velit, odio repudiandae nostrum ratione, nam sit rerum asperiores alias repellat ullam sed dolorem itaque rem facere suscipit!
    </div>
    <div className="container2">
        <h1>Article 2</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloribus saepe cumque velit, odio repudiandae nostrum ratione, nam sit rerum asperiores alias repellat ullam sed dolorem itaque rem facere suscipit!
    </div>
    <div className="container3">
        <h1>Article 3</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloribus saepe cumque velit, odio repudiandae nostrum ratione, nam sit rerum asperiores alias repellat ullam sed dolorem itaque rem facere suscipit!
    </div>
</Stack>


</Container>
<Footer />
    </>
  );
};