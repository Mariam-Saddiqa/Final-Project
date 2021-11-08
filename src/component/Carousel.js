import React, { useEffect, useState } from 'react';
import CarouselPanl from "./CarouselPanl"





const Carousel = () => {
        
        
    const [currentSlide, setCurrentSlide] = useState(0);
    const [news, setNews] = useState([]);

const slideNext = (e) => {
setCurrentSlide((prev) => {
    
    if (news == null){
        return currentSlide+1
    }
    return prev + 1 === news.length ? 0 : currentSlide + 1;
});
};
const slidePrev = (e) => {
setCurrentSlide((prev) => {
  
    if (news == null){
        return currentSlide-1
    }

    return prev === 0 ? news.length - 1 : currentSlide -1 ;
});
};

      
        useEffect(() => {

                fetch('https://newsapi.org/v2/top-headlines?category=sports&apiKey=3abd75c46fb44453a895b63bba8124bf')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setNews(data.articles)
                })
           
        }, [])
        
        return (
            <React.Fragment>
                <h1 style={{"marginTop":"35px","textAlign":"center","fontWeight":"bold","fontFamily":"initial","marginBottom":"35px"}}>
                    
                   
                        Read {news ? news.length : 0} Top News From World
                   
                </h1>
                <CarouselPanl 
                    article={news[currentSlide]}
                    slideNext={slideNext}
                    slidePrev={slidePrev}
                />
            </React.Fragment>
        );
    };




export default Carousel