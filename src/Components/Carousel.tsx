// Deprecated

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import Slider from "react-slick";

function EmbedVideo(props: { src: string}) {
    return (
        <div className="iframe-container">
            <iframe
                src={props.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

function EmbedImage(props: { image: any}) {
    return (
        <img
            src={props.image.src}
            alt={props.image.alt}
        />
    );
}

export default function Carousel(props: { carouselItems: any[] }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className="carousel-container">
            {props.carouselItems.map((item, index) => (
                <div key={index} className="">
                    {item.type === "image" ? (
                        <a href={item.link}>
                            <EmbedImage image={item} />
                        </a>
                    ) : (
                        <EmbedVideo src={item.src} />
                    )}
                </div>
            ))}
        </Slider>
    );
}