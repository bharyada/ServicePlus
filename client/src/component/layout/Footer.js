import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='more_services'>
      <div className='container'>
        <div className='row'>
          <div className='services'>
            <div className='tab-content'>
              <div className='col-md-12 tab-pane active' id='PopularCities'>
                <div className='col-sm-4'>
                  <div className='footer_left1'>
                    <p>Services Offered</p>
                  </div>
                  <ul className='services_list'>
                    <li>
                      <Link to='/localmovers' title='Local Movers'>
                        <i className='fa fa-caret-right'></i> Local Movers
                      </Link>
                    </li>
                    <li>
                      <a
                        title='Long Distance Movers '
                        hrefLang='en'
                        href='/longdistancemovers'
                      >
                        <i className='fa fa-caret-right'></i> Long Distance
                        Movers
                      </a>
                    </li>
                    <li>
                      <a
                        title='Commercial Movers '
                        hrefLang='en'
                        href='/commercialmovers'
                      >
                        <i className='fa fa-caret-right'></i> Commercial Movers
                      </a>
                    </li>
                    <li>
                      <a
                        title='Vehicle Movers '
                        hrefLang='en'
                        href='/vehiclemovers'
                      >
                        <i className='fa fa-caret-right'></i> Vehicle Movers
                      </a>
                    </li>
                    <li>
                      <a
                        title='Office Relocation '
                        hrefLang='en'
                        href='/officerelocation'
                      >
                        <i className='fa fa-caret-right'></i> Office Relocation
                      </a>
                    </li>
                    <li>
                      <a
                        title='Home Shifting '
                        hrefLang='en'
                        href='/homeshifting'
                      >
                        <i className='fa fa-caret-right'></i> Home Shifting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-4'>
                  <div className='footer_left1'>
                    <p>Others</p>
                  </div>
                  <ul className='services_list'>
                    <li>
                      <a title=' About Us ' hrefLang='en' href='/about'>
                        <i className='fa fa-caret-right'></i> About Us
                      </a>
                    </li>
                    <li>
                      <a
                        title='Packers And Movers'
                        hrefLang='en'
                        href='/packersandmovers'
                      >
                        <i className='fa fa-caret-right'></i> Packers And Movers
                      </a>
                    </li>
                    <li>
                      <a
                        // href='javascript:void(0)'
                        title='Post a Free Ad'
                        data-toggle='modal'
                        data-target='#getlist_Modal'
                      >
                        <i className='fa fa-caret-right'></i> Post a free Ad
                      </a>
                    </li>
                    <li>
                      <a title='Blog' hrefLang='en' href='blog.html'>
                        <i className='fa fa-caret-right'></i> Blog
                      </a>
                    </li>
                    <li>
                      <a title='Career' hrefLang='en' href='reviews.html'>
                        <i className='fa fa-caret-right'></i> Testimonial
                      </a>
                    </li>
                    <li>
                      <a title='Career' hrefLang='en' href='careers.html'>
                        <i className='fa fa-caret-right'></i> Career
                      </a>
                    </li>
                    <li>
                      <a title='Contact' hrefLang='en' href='contact-us.html'>
                        <i className='fa fa-caret-right'></i> Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-4'>
                  <div className='footer_left1'>
                    <p>Stay Connected</p>
                  </div>
                  <div className='social-icon1'>
                    <ul className='social-network social-circle'>
                      <li>
                        <span
                          //onClick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://www.facebook.com/pmdirdotcom','_blank')"
                          className='icoFacebook'
                          title='Facebook'
                          data-cf-modified-adc4804007e6b1b0f0135f59-=''
                        >
                          <i className='fa fa-facebook'></i>
                        </span>
                      </li>
                      <li>
                        <span
                          //onClick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://twitter.com/pmdircom','_blank')"
                          className='icoTwitter'
                          title='Twitter'
                          data-cf-modified-adc4804007e6b1b0f0135f59-=''
                        >
                          <i className='fa fa-twitter'></i>
                        </span>
                      </li>
                      <li>
                        <span
                          //onClick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://plus.google.com/+Pmdir','_blank')"
                          className='icoGoogle'
                          title='Google +'
                          data-cf-modified-adc4804007e6b1b0f0135f59-=''
                        >
                          <i className='fa fa-google-plus'></i>
                        </span>
                      </li>
                      <li>
                        <span
                          //onClick="if (!window.__cfRLUnblockHandlers) return false; window.open('https://www.linkedin.com/company/pmdir','_blank')"
                          className='icoLinkedin'
                          title='Linkedin'
                          data-cf-modified-adc4804007e6b1b0f0135f59-=''
                        >
                          <i className='fa fa-linkedin'></i>
                        </span>
                      </li>
                    </ul>
                    {/* <a
                      href='https://play.google.com/store/apps/details?id=com.pmdir.pmdir&amp;hl=en_US'
                      title='Android Application'
                    >
                      <img
                        title='Android Application'
                        className='img-responsive'
                        alt='Download Android'
                        src='assets/images/android.png'
                      />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
