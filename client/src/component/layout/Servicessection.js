import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const h1Style = {
  color: "white",
  margin: "-350px",
  textalign: "center"
};

function Servicessection() {
  return (
    <Carousel
      autoPlay
      infiniteLoop={true}
      showThumbs={false}
      showArrows={true}
      useKeyboardArrows
      showIndicators={false}
    >
      <div>
        <img src={require("../../assets/images/Services.jpg")} />
        <h1 style={h1Style}>Any type of service provide near you</h1>
      </div>
      <div>
        <img src={require("../../assets/images/Services1.jpg")} />
      </div>
      <div>
        <img src={require("../../assets/images/5.jpg")} />
      </div>
    </Carousel>

    // <div className='services_section' id='1'>
    //   <div className='container'>
    //     <div className='service_wrap'>
    //       <div className='main_title'>
    //         <span>Welcome To Services</span>
    //         <h2>Any type of service provide near you</h2>
    //       </div>
    //       <div className='search_wrap'>
    //         <form
    //           //onSubmit='if (!window.__cfRLUnblockHandlers) return false; return validateForm()'
    //           action='https://www.Service+.com/city/pass'
    //           method='post'
    //           data-cf-modified-adc4804007e6b1b0f0135f59-=''
    //         >
    //           <div className='row'>
    //             <div className='col-sm-10 col-xs-8'>
    //               <input
    //                 required
    //                 name='search_keywords'
    //                 id='search_keywords'
    //                 type='text'
    //                 className='form-control form-control-new search_keywords'
    //                 placeholder='Enter Your Home City'
    //               />
    //             </div>
    //             <div className='col-sm-2 col-xs-4'>
    //               <input type='submit' name='submit' value='Search' />
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Servicessection;
