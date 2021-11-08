import React from 'react';


const CarouselPanl = (props) => {
  


    const btnContainer = {
      display: "inline-block",
      float: "right"
    };
    const btn = {
      border: "none",
      background: "gray",
      color: "white",
      fontSize: "22px",
      padding: "5px 10px",
      borderRadius: "10px",
      margin: "0 10px",
      

    };
    const img =  {
      width:"900px"
    };
    console.log(props)
    if (!props.article) return null
    return (
      <React.Fragment>
        <div className ="Centerlized"><img src={props.article.urlToImage ? props.article.urlToImage : "defaultImage" } style={ img } alt="Sliderr_image" /></div>
        <h3 style={{"marginTop":"35px","textAlign":"center","fontWeight":"bold","fontFamily":"initial"}}>{props.article.title}</h3>
        <a href={props.article.url} style={{"textAlign":"center","fontWeight":"bold","fontFamily":"initial"}} >Read more</a>
        

        <h1 className ="Centerlized">
          
          <span style={btnContainer}>
            <button style={btn} onClick={props.slidePrev}>
              {"<"} Prevs
            </button>
            |
            <button style={btn} onClick={props.slideNext}>
              {">"} Next
            </button>
          </span>
        </h1>
      </React.Fragment>
    );
  };

  
 
  export default CarouselPanl