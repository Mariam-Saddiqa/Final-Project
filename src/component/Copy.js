import React, { useEffect, useState } from 'react';
import CarouselPanl from "./CarouselPanl"





    const Carousel = (props) => {
       
        const [currentSlide, setCurrentSlide] = useState(0);
        const Slides = [
            {
                id: 1,
                title: "First Slide",
                link: "https://via.placeholder.com/750x350/FF0000/FFFFFF"
            },
            {
                id: 2,
                title: "Second Slide",
                link: "https://via.placeholder.com/750x350/00FF00/000000"
            },
            {
                id: 3,
                title: "Third Slide",
                link: "https://via.placeholder.com/750x350/0000FF/FFFFFF"
            },
            {
                id: 4,
                title: "Fourth Slide",
                link: "https://via.placeholder.com/750x350/F000F0/000000"
            }
        ];
        const slideNext = (e) => {
            setCurrentSlide((prev) => {
                return prev + 1 === Slides.length ? 0 : currentSlide + 1;
            });
        };
        const slidePrev = (e) => {
            setCurrentSlide((prev) => {
                return prev === 0 ? Slides.length - 1 : currentSlide - 1;
            });
        };
        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentSlide((prev) => {
                    return prev + 1 === Slides.length ? 0 : prev + 1;
                });
            }, 4000);
            return () => {
                clearInterval(intervalId);
            };
        }, []);
       
        return (
            <React.Fragment>
                <h1>
                    React Slider{" "}
                    <small>
                        <em>(we have {Slides.length} slides)</em>
                    </small>
                </h1>
                <CarouselPanl
                    image={Slides[currentSlide]}
                    slideNext={slideNext}
                    slidePrev={slidePrev}
                />
            </React.Fragment>
        );
    };



 


export default Carousel
