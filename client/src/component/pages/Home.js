import React, { Component } from 'react';
import ServiceSection from '../layout/Servicessection';
import WhyMeSection from '../layout/Whymesection';
import GetListSection from '../layout/Getlistsection';
import TestimonialSection from '../layout/Testimonialsection';
import BlogSection from '../layout/Blogsection';

const frameStyle = {
  width: 'auto',
  height: 'auto',
  src: 'https://www.youtube.com/embed/1maE5w6VJ24'
};

class Home extends Component {
  render() {
    return (
      <div>
        <ServiceSection style={{ width: '40px' }} />
        <WhyMeSection />
        <GetListSection />
        <TestimonialSection />
        <p className='pmdirhead'>OUR BLOGS</p>
        <BlogSection />
        <p className='section_title pmdirhead'>WHAT IS Service +?</p>
        <div className='more_services new_bg'>
          <div className='container'>
            <div className='row'>
              <div className='services'>
                <div className='col-sm-12'>
                  <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                    <p className='cnt_wrp'>
                      SERVICE+ is a dedicated and verified local{' '}
                      <strong>Packers And Movers </strong>Service Provider.
                      Started in 2015 with the vision of serving people
                      efficiently with their relocation needs, we offer
                      expedient service to individuals and business corporate to
                      find <i>packers & movers</i> in their city.{' '}
                    </p>
                    <p className='cnt_wrp'>
                      Moving to a new city is an uphill task, starting from
                      finding the right packer and mover, getting a good quote
                      to finally knowing that the quote you got will get you a
                      damage free shift. With a mission to reduce the gap
                      between customer and moving companies, we have one of the
                      fastest growing network of hundreds of carefully selected{' '}
                      <h6>
                        <strong>packers and movers service providers</strong>
                      </h6>
                      who cover all major destinations in the country.
                    </p>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <iframe title='title' style={{ frameStyle }}></iframe>
                  </div>
                  <div className='col-md-12'>
                    <p className='cnt_wrp'>
                      Service + will help you choose your moving company without
                      any delay or doubt. No more unwanted calls from multiple{' '}
                      <strong>
                        <i>movers and packers companies</i>
                      </strong>{' '}
                      asking the same questions and giving you unrealistic
                      quotes. We offer you only a selected list of carefully
                      chosen movers according to your specific needs. Our
                      services are free of cost for you and there are no hidden
                      charges. We are just a call or chat away.
                    </p>
                    <p className='cnt_wrp'>
                      Service + is a transparent, fast, and secure platform. All
                      the packers & movers are registered after passing through
                      a screening process, in our{' '}
                      <strong>packers movers directory</strong>. Our listed{' '}
                      <strong>movers and packers</strong> are professionals with
                      years of experience and are capable to offer all guidance
                      during office/house moving activity. People who want to
                      shift their corporate office or residence, intercity or
                      intra-city are assured to avail relocation services
                      without any fuss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
