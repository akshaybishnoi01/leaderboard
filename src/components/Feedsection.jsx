import React from 'react';
import { useState } from 'react';

const Feedsection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <section className=' bg_img min-vh-100 d-flex justify-content-center '>
        <div className='bg_color mx_393 w-100'>
          <div className=' d-flex justify-content-between align-items-center py-5 px-4'>
            <h1 className=' mb-0 ff-inter fs-22 lh-26 fw-bold color_emphasis '>
              Feed
            </h1>
            <div className=' d-flex gap-2 align-items-center bg_number'>
              
              <div>
                <button onClick={toggleVisibility} className=" mb-0 ff-inter fw-normal fs-16 lh-19 color_emphasis bor_num">
                <span className=' pe-2'>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_82_2619)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.917694 0.819092H9.94503V9.24462H7.35393V10.1808H6.2673V9.24462H2.83914V10.1808H1.75252V9.24462H0.917694V0.819092Z" fill="#052E16" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.920763 0H9.94809V0.858132H10.8667V9.28363H10.8653L8.15045 9.28371V10.9999H8.14904L5.43248 11V10.1419V9.28371H3.637V8.42556H5.43248H6.35193H6.35356V9.28371H6.35193V10.1419H7.23102V9.24462H8.14872V8.42556H9.9473L9.94809 0.858132L0.920763 0.858154V0ZM0.920763 10.1419V8.42556H1.84021V10.1419H2.71624V9.24462H3.63569V10.1419H3.63732V11H0.920763V10.1419ZM0 9.28363V0.858132H0.919451V9.28363H0Z" fill="#052E16" />
                    <path d="M3.57313 4.19328V6.76775H4.53437V4.19328H3.57313Z" fill="white" stroke="white" stroke-width="0.0531915" />
                    <path d="M8.08791 4.19328V6.76775H9.04915V4.19328H8.08791Z" fill="white" stroke="white" stroke-width="0.0531915" />
                  </g>
                </svg>

              </span>#36985<span className=' ps-2'>
                    <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L3.5 4L6 1" stroke="#052E16" stroke-linecap="round" />
                    </svg>

                  </span>
                </button>
                <div>
                  {isVisible ? (
                    <ul className=' p-0 d-flex flex-column justify-content-center align-items-center position-absolute p-3 dropdown_text'>
                      <li><a className=" mb-0 ff-inter fw-normal fs-16 lh-19 color_emphasis" href="#">
                        #36986</a></li>
                      <li><a className=" mb-0 ff-inter fw-normal fs-16 lh-19 color_emphasis" href="#">
                        #36987</a></li>
                      <li><a className=" mb-0 ff-inter fw-normal fs-16 lh-19 color_emphasis" href="#">
                        #36988</a></li>
                    </ul>
                  ) : null}
                </div>
              </div>

            </div>
          </div>
          <div>
            <button>

            </button>
          </div>
        </div>

      </section>
    </>
  )
}

export default Feedsection
