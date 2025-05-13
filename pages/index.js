import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Togthr template</title>
          <meta property="og:title" content="Togthr template" />
        </Head>
        <section className="home-hero">
          <header className="home-header10">
            <header data-thq="thq-navbar" className="home-navbar">
              <img alt="image" src="/logo.svg" className="home-branding1" />
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <div className="home-hamburger">
                  <img
                    alt="image"
                    src="/hamburger.svg"
                    className="home-icon10"
                  />
                </div>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <div className="home-container2">
                    <img alt="image" src="/logo.svg" className="home-image10" />
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon11">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav2"
                  >
                    <span className="home-text10">About</span>
                    <span className="home-text11">Features</span>
                    <span className="home-text12">Pricing</span>
                    <span className="home-text13">Team</span>
                    <span className="home-text14">Blog</span>
                  </nav>
                  <div className="home-container3">
                    <button className="home-login button">Login</button>
                    <button className="button">Register</button>
                  </div>
                </div>
                <div className="home-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon13"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon15"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon17"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </header>
          <video
            src="/togethr-template.mp4"
            loop
            muted
            poster="/hero-bg.png"
            preload="auto"
            autoPlay
            playsInline
            className="home-video"
          ></video>
          <div className="home-hero-content">
            <div className="home-header-container1">
              <div className="home-header11">
                <h1 className="home-heading10">
                  <span>
                    Face-to-face with
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text16">imagination</span>
                  <br></br>
                </h1>
              </div>
              <p className="home-caption10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button home-button1">
              <span>
                <span>Get started today</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-note">
          <h2 className="home-caption11">
            The most comprehensive lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna.
          </h2>
        </section>
        <section className="home-statistics">
          <div className="home-content10">
            <div className="home-stat1">
              <h3 className="home-header12">$1.69M</h3>
              <span className="home-caption12">
                Consectetur adipiscing
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-stat2">
              <h3 className="home-header13">Multiverse</h3>
              <span className="home-caption13">Unde omnis iste</span>
            </div>
            <div className="home-stat3">
              <h3 className="home-header14">500K</h3>
              <span className="home-caption14">Accusantium doloremque</span>
            </div>
          </div>
        </section>
        <section className="home-slider1">
          <div className="home-header15">
            <h2 className="home-heading11">
              <span>The first all-in-one verse </span>
              <span className="home-text22">o</span>
              <span className="home-text23">
                ptimized for growth.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
          </div>
          <div className="home-selector">
            <p className="home-caption15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-slide-titles">
              <div className="slide-title">
                <span>Metaverse</span>
              </div>
              <div className="slide-title slide-title-active">
                <span>Ecosystems</span>
              </div>
              <div className="slide-title">
                <span>Development</span>
              </div>
              <div className="slide-title">
                <span>Integration</span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-slides">
          <div className="home-slider2 slider blaze-slider">
            <div className="home-slider-container blaze-container">
              <div className="home-slider-track-container blaze-track-container">
                <div className="home-slider-track blaze-track">
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image11"
                    />
                    <div className="home-content11">
                      <div className="home-header16">
                        <h3 className="home-heading12">Metaverse</h3>
                        <p className="home-caption16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-more1">
                        <span className="home-caption17">Read More</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon19">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image12"
                    />
                    <div className="home-content12">
                      <div className="home-header17">
                        <h3 className="home-heading13">Ecosystems</h3>
                        <p className="home-caption18">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-more2">
                        <span className="home-caption19">Read More</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon21">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image13"
                    />
                    <div className="home-content13">
                      <div className="home-header18">
                        <h3 className="home-heading14">Development</h3>
                        <p className="home-caption20">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-more3">
                        <span className="home-caption21">Read More</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon23">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image14"
                    />
                    <div className="home-content14">
                      <div className="home-header19">
                        <h3 className="home-heading15">Integration</h3>
                        <p className="home-caption22">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-more4">
                        <span className="home-caption23">Read More</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon25">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-controls1">
                <button
                  data-role="previous-banner-button"
                  className="home-previous1 blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon27">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-next1 blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon29">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container5">
              <Script
                html={`<script defer>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <section className="home-get-started">
          <div className="home-header-container2">
            <div className="home-header20">
              <h2 className="home-heading16">
                Companies will dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore veniam and more
                opportunities.
              </h2>
              <p className="home-caption24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-button2">
              <button className="button">
                <span>Get started today</span>
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="/getstarted-800w.png"
            className="home-image15"
          />
        </section>
        <section className="home-objectives">
          <div className="home-content15">
            <span className="home-text29">Objectives</span>
            <div className="home-objectives-list">
              <div className="objective">
                <h3 className="home-text30">Growth</h3>
                <p className="home-text31">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-objective2">
                <h3 className="home-text32">Develop</h3>
                <p className="home-text33">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-objective3">
                <h3 className="home-text34">Optimize</h3>
                <p className="home-text35">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-growth">
          <div className="home-content16">
            <div className="home-header21">
              <div className="home-header22">
                <h2 className="home-heading17">
                  <span>
                    Multiverse optimized for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text37">growth.</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-caption25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="home-caption26">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-testimonial1">
              <div className="home-content17">
                <span className="home-text39">Testimonial</span>
                <p className="home-text40">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
              <div className="home-information1">
                <div className="home-author1">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-icon31"
                  />
                  <span className="home-name1">Andrew Gonzales</span>
                </div>
                <img alt="image" src="/logoipsum.svg" className="home-from1" />
              </div>
            </div>
          </div>
          <div className="home-images1">
            <div className="home-square1"></div>
            <img alt="image" src="/growth-1400w.png" className="home-image16" />
          </div>
        </section>
        <section className="home-experience">
          <div className="home-images2">
            <div className="home-square2"></div>
            <img
              alt="image"
              src="/experience-1400w.png"
              className="home-image17"
            />
          </div>
          <div className="home-content18">
            <div className="home-header23">
              <div className="home-header-container3">
                <div className="home-header24">
                  <h2 className="home-heading18">
                    <span>A worlds class </span>
                    <span className="home-text42">experience</span>
                  </h2>
                </div>
                <p className="home-caption27">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.
                </p>
              </div>
              <div className="home-checkmarks">
                <div className="home-check1">
                  <div className="home-mark1">
                    <svg viewBox="0 0 1024 1024" className="home-icon32">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text43">
                    Duis aute irure dolor in reprehenderit
                  </span>
                </div>
                <div className="home-check2">
                  <div className="home-mark2">
                    <svg viewBox="0 0 1024 1024" className="home-icon34">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text44">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="home-check3">
                  <div className="home-mark3">
                    <svg viewBox="0 0 1024 1024" className="home-icon36">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text45">
                    Voluptate velit esse cillum dolore eu fugiat nulla
                  </span>
                </div>
                <div className="home-check4">
                  <div className="home-mark4">
                    <svg viewBox="0 0 1024 1024" className="home-icon38">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text46">
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                  </span>
                </div>
              </div>
            </div>
            <div className="home-testimonial2">
              <div className="home-content19">
                <span className="home-text47">Testimonial</span>
                <p className="home-text48">
                  “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.”
                </p>
              </div>
              <div className="home-information2">
                <div className="home-author2">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-icon40"
                  />
                  <span className="home-name2">Cory Smith</span>
                </div>
                <img
                  alt="image"
                  src="/logoipsum-2.svg"
                  className="home-from2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-create">
          <div className="home-content20">
            <div className="home-header25">
              <h2 className="home-heading19">
                <span>
                  Create your own
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text50">environment</span>
                <span> now!</span>
                <br></br>
              </h2>
            </div>
            <button className="home-button4 button">
              <span>
                <span>Get started today</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-comparision">
          <div className="home-header-container4">
            <div className="home-header26">
              <h2 className="home-heading20">
                <span>Environment c</span>
                <span className="home-text57">omparision</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption28">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod.
            </p>
          </div>
          <div className="home-table">
            <div className="home-row10">
              <div className="home-headers1">
                <span className="home-text59">Placeholder</span>
              </div>
              <div className="home-plans1">
                <div className="home-row11">
                  <span className="home-text60">TOGHTR</span>
                  <span className="home-text61">AGENCY</span>
                  <span className="home-text62">FRELLANCE</span>
                </div>
              </div>
            </div>
            <div className="home-row12">
              <div className="home-headers2">
                <span className="home-text63">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-plans2">
                <div className="home-row13">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row14">
              <div className="home-headers3">
                <span className="home-text64">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans3">
                <div className="home-row15">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row16">
              <div className="home-headers4">
                <span className="home-text65">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-plans4">
                <div className="home-row17">
                  <div className="value">
                    <span className="home-text66">Custom</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row18">
              <div className="home-headers5">
                <span className="home-text67">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-plans5">
                <div className="home-row19">
                  <div className="value">
                    <span className="home-text68">Unlimited</span>
                  </div>
                  <div className="value">
                    <span className="home-text69">Limited</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row20">
              <div className="home-headers6">
                <span className="home-text70">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans6">
                <div className="home-row21">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                  <div className="value">
                    <span className="home-text71">Limited</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row22">
              <div className="home-headers7">
                <span className="home-text72">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans7">
                <div className="home-row23">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row24">
              <div className="home-headers8">
                <span className="home-text73">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans8">
                <div className="home-row25">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <span className="home-text74">Limited</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-data">
          <div className="home-header-container5">
            <div className="home-header27">
              <div className="home-row26">
                <h2 className="home-heading21">
                  <span>
                    Understand your data to manage all in one
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text76">platform</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <p className="home-caption29">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-content21">
            <div className="home-image18">
              <img alt="image" src="/data-1400w.png" className="home-image19" />
            </div>
            <div className="home-accordion">
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header28">Management</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header29">Integrations</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name1"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header30">Customer Solutions</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name2"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header31">Recruiting</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name3"></IconContainer>
              </div>
              <div>
                <div className="home-container7">
                  <Script
                    html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-customer">
          <div className="home-header32">
            <h2 className="home-heading22">
              <span>
                Customer validation is an essential phase of the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text79">product development process</span>
              <br></br>
            </h2>
          </div>
          <div className="home-quotes">
            <div className="home-quote1">
              <p className="home-quote2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author3">
                <span className="home-name3">Joanna Smith</span>
                <span className="home-location1">Briville</span>
              </div>
            </div>
            <div className="home-quote3">
              <p className="home-quote4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author4">
                <span className="home-name4">Joanna Smith</span>
                <span className="home-location2">Briville</span>
              </div>
            </div>
            <div className="home-quote5">
              <p className="home-quote6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author5">
                <span className="home-name5">Joanna Smith</span>
                <span className="home-location3">Briville</span>
              </div>
            </div>
            <div className="home-quote7">
              <p className="home-quote8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author6">
                <span className="home-name6">Joanna Smith</span>
                <span className="home-location4">Briville</span>
              </div>
            </div>
          </div>
          <div className="home-controls2">
            <button className="home-previous2 button">
              <svg viewBox="0 0 1024 1024" className="home-icon41">
                <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
            </button>
            <button className="home-next2 button">
              <svg viewBox="0 0 1024 1024" className="home-icon43">
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </button>
            <button className="button home-button5">
              <span>
                <span>View all cases</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-faq">
          <div className="home-header33">
            <h2 className="home-heading23">
              <span>Frequently asked </span>
              <span className="home-text85">questions</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
          </div>
          <div className="home-content30">
            <div className="home-column1">
              <div className="home-element14">
                <h3 className="home-header34">
                  Lorem ipsum dolor sit ametetur elit?
                </h3>
                <p className="home-content31">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-element15">
                <h3 className="home-header35">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </h3>
                <p className="home-content32">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="home-element16">
                <h3 className="home-header36">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </h3>
                <p className="home-content33">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="home-column2">
              <div className="home-element17">
                <h3 className="home-header37">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </h3>
                <p className="home-content34">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="home-element18">
                <h3 className="home-header38">
                  Lorem ipsum dolor sit ametetur elit?
                </h3>
                <p className="home-content35">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-element19">
                <h3 className="home-header39">
                  Incididunt ut labore et dolore?
                </h3>
                <p className="home-content36">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-footer">
          <div className="home-content37">
            <div className="home-main">
              <div className="home-branding2">
                <img alt="image" src="/logo.svg" className="home-image20" />
                <span className="home-text87">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-links">
                <div className="home-column3">
                  <span className="home-header40">Company</span>
                  <div className="home-list1">
                    <Link href="/">
                      <a className="home-link10">About</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link11">Services</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link12">How</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link13">
                        <span className="home-text88">Why</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="home-column4">
                  <span className="home-header41">Extern</span>
                  <div className="home-list2">
                    <Link href="/">
                      <a className="home-link14">News</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link15">Articles</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link16">Blog</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link17">Privacy</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link18">Terms</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link19">Legal</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link20">Press</a>
                    </Link>
                  </div>
                </div>
                <div className="home-column5">
                  <span className="home-header42">Social</span>
                  <div className="home-list3">
                    <Link href="/">
                      <a className="home-link21">LinkedIn</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link22">Twitter</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link23">Instagram</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link24">Facebook</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link25">TikTok</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-bottom">
              <span className="home-text90">
                © 2022 togthr - All rights reserved
              </span>
              <button data-role="scroll-top" className="home-button6 button">
                <img alt="image" src="/arrow.svg" className="home-image21" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container9">
            <Script
              html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header10 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-branding1 {
            width: 120px;
            object-fit: cover;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hamburger {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
            background-color: #0000f5;
          }
          .home-hamburger:hover {
            opacity: 0.5;
          }
          .home-icon10 {
            width: 60px;
            object-fit: cover;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-image10 {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text10 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text11 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text12 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text13 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text14 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon-group {
            fill: var(--dl-color-gray-white);
            display: flex;
          }
          .home-icon13 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon15 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon17 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-hero-content {
            gap: var(--dl-layout-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading10 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
            border-radius: var(--dl-layout-radius-radius4);
            animation-name: none;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text16 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-caption10 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-note {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-end;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-caption11 {
            color: #7c7c80;
            font-size: 40px;
            max-width: 800px;
            font-style: normal;
            font-weight: 400;
            line-height: 52px;
            margin-right: 158px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-content10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-stat1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header12 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption12 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header13 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption13 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-header14 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption14 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-slider1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: flex-start;
          }
          .home-header15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading11 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text22 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-text23 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-selector {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-caption15 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-slide-titles {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-slides {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-slider2 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-slider-container {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-slider-track-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-slider-track {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image11 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content11 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-header16 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading12 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption16 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more1 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more1:hover {
            opacity: 0.5;
          }
          .home-caption17 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon19 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image12 {
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content12 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-header17 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading13 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption18 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more2 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more2:hover {
            opacity: 0.5;
          }
          .home-caption19 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon21 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image13 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content13 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-header18 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading14 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption20 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more3 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more3:hover {
            opacity: 0.5;
          }
          .home-caption21 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon23 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image14 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content14 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-header19 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading15 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption22 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more4 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more4:hover {
            opacity: 0.5;
          }
          .home-caption23 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon25 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-controls1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-previous1 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon27 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-next1 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon29 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-container5 {
            display: contents;
          }
          .home-get-started {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
          }
          .home-header-container2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            z-index: 100;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header20 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading16 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption24 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-button2 {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image15 {
            top: 0px;
            right: 0px;
            width: 720px;
            bottom: 0px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-objectives {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content15 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
            border-top-width: 1px;
          }
          .home-text29 {
            color: #7c7c80;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-objectives-list {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text30 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text31 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text32 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text33 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text34 {
            color: #ffffff;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text35 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-growth {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
          }
          .home-content16 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header21 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header22 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading17 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text37 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-caption25 {
            color: #7c7c80;
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-caption26 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-bottom-width: 1px;
          }
          .home-testimonial1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-content17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text39 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-text40 {
            color: rgb(255, 255, 255);
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 5%;
          }
          .home-information1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-author1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            border-color: #7c7c80;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
            border-right-width: 1px;
          }
          .home-icon31 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-from1 {
            width: 125px;
            object-fit: cover;
          }
          .home-images1 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-square1 {
            top: 64px;
            right: -35px;
            width: 180px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image16 {
            width: 640px;
            z-index: 100;
            margin-top: var(--dl-layout-space-sixunits);
            object-fit: cover;
          }
          .home-experience {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-images2 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-square2 {
            left: -35px;
            width: 180px;
            bottom: -35px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image17 {
            width: 575px;
            z-index: 100;
            object-fit: cover;
          }
          .home-content18 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header23 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-header-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header24 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading18 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text42 {
            font-family: Playfair Display;
          }
          .home-caption27 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-checkmarks {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-check1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark1 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon32 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text43 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark2 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon34 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text44 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark3 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon36 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text45 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark4 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon38 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text46 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-testimonial2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-content19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text47 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-text48 {
            color: rgb(255, 255, 255);
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 5%;
          }
          .home-information2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-author2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            border-color: #7c7c80;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
            border-right-width: 1px;
          }
          .home-icon40 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-from2 {
            width: 100px;
            object-fit: cover;
          }
          .home-create {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-content20 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-header25 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading19 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text50 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-button4 {
            background-color: #000000;
          }
          .home-comparision {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-header-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header26 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-heading20 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption28 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            text-align: center;
            line-height: 36px;
          }
          .home-table {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-row10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers1 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text59 {
            color: rgba(255, 255, 255, 0);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row11 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text60 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-text61 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-text62 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-row12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers2 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text63 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row13 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-row14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers3 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text64 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row15 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-row16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers4 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text65 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans4 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row17 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text66 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-row18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers5 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text67 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row19 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text68 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-text69 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-row20 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers6 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text70 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans6 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row21 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text71 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-row22 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers7 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text72 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans7 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row23 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-row24 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers8 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text73 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans8 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row25 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text74 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-data {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-header-container5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header27 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row26 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-heading21 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption29 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-content21 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image18 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image19 {
            width: 440px;
            object-fit: cover;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-header28 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header29 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header30 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header31 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-container7 {
            display: contents;
          }
          .home-customer {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-header32 {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            flex-direction: column;
          }
          .home-heading22 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
          }
          .home-text79 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-quotes {
            width: 100%;
            display: flex;
            position: relative;
            overflow-x: hidden;
            align-items: flex-start;
            margin-left: max(0px, (100% - 1240px)/2);
            padding-top: var(--dl-layout-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-quote1 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote2 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author3 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote3 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote4 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author4 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name4 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote5 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote6 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author5 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote7 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote8 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author6 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name6 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location4 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-controls2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
          }
          .home-previous2 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon41 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-next2 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon43 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-faq {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header33 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-heading23 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text85 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-content30 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-column1 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header34 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content31 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header35 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content32 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header36 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content33 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-column2 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element17 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header37 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content34 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header38 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content35 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element19 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header39 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content36 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .home-content37 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-top-width: 1px;
          }
          .home-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-branding2 {
            gap: var(--dl-layout-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image20 {
            width: 120px;
            object-fit: cover;
          }
          .home-text87 {
            color: #7c7c80;
            line-height: 24px;
          }
          .home-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column3 {
            gap: var(--dl-layout-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header40 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link10 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link10:hover {
            opacity: 0.5;
          }
          .home-link11 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link11:hover {
            opacity: 0.5;
          }
          .home-link12 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link12:hover {
            opacity: 0.5;
          }
          .home-link13 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link13:hover {
            opacity: 0.5;
          }
          .home-text88:hover {
            opacity: 0.5;
          }
          .home-column4 {
            gap: var(--dl-layout-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header41 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link14 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link14:hover {
            opacity: 0.5;
          }
          .home-link15 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link15:hover {
            opacity: 0.5;
          }
          .home-link16 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link16:hover {
            opacity: 0.5;
          }
          .home-link17 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link17:hover {
            opacity: 0.5;
          }
          .home-link18 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link18:hover {
            opacity: 0.5;
          }
          .home-link19 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link19:hover {
            opacity: 0.5;
          }
          .home-link20 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link20:hover {
            opacity: 0.5;
          }
          .home-column5 {
            gap: var(--dl-layout-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header42 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link21 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link21:hover {
            opacity: 0.5;
          }
          .home-link22 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link22:hover {
            opacity: 0.5;
          }
          .home-link23 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link23:hover {
            opacity: 0.5;
          }
          .home-link24 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link24:hover {
            opacity: 0.5;
          }
          .home-link25 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link25:hover {
            opacity: 0.5;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text90 {
            color: #7c7c80;
            font-size: 14px;
            line-height: 21px;
          }
          .home-button6 {
            display: flex;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-fiveunits);
            border-radius: 0px;
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .home-image21 {
            width: 21px;
            object-fit: cover;
          }
          .home-container9 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .home-hero-content {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-content10 {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-stat1 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat2 {
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat3 {
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-selector {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-slider2 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-image11 {
              width: 100%;
              height: 120px;
            }
            .home-content11 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header16 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-heading12 {
              font-size: 24px;
            }
            .home-caption16 {
              max-width: 600px;
            }
            .home-image12 {
              width: 100%;
              height: 120px;
            }
            .home-content12 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header17 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-heading13 {
              font-size: 24px;
            }
            .home-caption18 {
              max-width: 600px;
            }
            .home-image13 {
              width: 100%;
              height: 120px;
            }
            .home-content13 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header18 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-heading14 {
              font-size: 24px;
            }
            .home-caption20 {
              max-width: 600px;
            }
            .home-image14 {
              width: 100%;
              height: 120px;
            }
            .home-content14 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header19 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-heading15 {
              font-size: 24px;
            }
            .home-caption22 {
              max-width: 600px;
            }
            .home-content15 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-objectives-list {
              padding-right: 0px;
            }
            .home-objective2 {
              flex: 1;
            }
            .home-objective3 {
              flex: 1;
            }
            .home-growth {
              flex-direction: column;
            }
            .home-testimonial1 {
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text40 {
              max-width: 560px;
            }
            .home-images1 {
              padding-top: 0px;
            }
            .home-square1 {
              top: -20px;
              right: -20px;
            }
            .home-image16 {
              margin-top: 0px;
            }
            .home-experience {
              align-items: flex-start;
              flex-direction: column-reverse;
            }
            .home-content20 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading19 {
              font-size: 50px;
            }
            .home-headers1 {
              flex: 0;
            }
            .home-text59 {
              color: rgba(255, 255, 255, 0);
              width: 0px;
              font-style: normal;
              font-weight: 500;
              line-height: 32px;
            }
            .home-row11 {
              padding-right: 0px;
              justify-content: center;
            }
            .home-row12 {
              flex-direction: column;
            }
            .home-headers2 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text63 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans2 {
              width: 100%;
            }
            .home-row13 {
              padding-right: 0px;
            }
            .home-row14 {
              flex-direction: column;
            }
            .home-headers3 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text64 {
              width: 100%;
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans3 {
              width: 100%;
            }
            .home-row15 {
              padding-right: 0px;
            }
            .home-row16 {
              flex-direction: column;
            }
            .home-headers4 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text65 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans4 {
              width: 100%;
            }
            .home-row17 {
              padding-right: 0px;
            }
            .home-row18 {
              flex-direction: column;
            }
            .home-headers5 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text67 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans5 {
              width: 100%;
            }
            .home-row19 {
              padding-right: 0px;
            }
            .home-row20 {
              flex-direction: column;
            }
            .home-headers6 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text70 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans6 {
              width: 100%;
            }
            .home-row21 {
              padding-right: 0px;
            }
            .home-row22 {
              flex-direction: column;
            }
            .home-headers7 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text72 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans7 {
              width: 100%;
            }
            .home-row23 {
              padding-right: 0px;
            }
            .home-row24 {
              flex-direction: column;
            }
            .home-headers8 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text73 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans8 {
              width: 100%;
            }
            .home-row25 {
              padding-right: 0px;
            }
            .home-heading21 {
              color: rgb(255, 255, 255);
            }
            .home-text76 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-content21 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-header28 {
              font-size: 24px;
            }
            .home-header29 {
              font-size: 24px;
            }
            .home-header30 {
              font-size: 24px;
            }
            .home-header31 {
              font-size: 24px;
            }
            .home-customer {
              max-width: 1400px;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-header32 {
              max-width: 100%;
            }
            .home-heading22 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-quotes {
              padding-top: 0px;
              flex-direction: column;
              border-bottom-width: 0px;
            }
            .home-quote1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote2 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote4 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote5 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote6 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote7 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote8 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-controls2 {
              max-width: 100%Width;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-previous2 {
              display: none;
            }
            .home-next2 {
              display: none;
            }
            .home-faq {
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-content30 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-column1 {
              max-width: 100%;
            }
            .home-header34 {
              font-size: 24px;
            }
            .home-content31 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header35 {
              font-size: 24px;
            }
            .home-content32 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header36 {
              font-size: 24px;
            }
            .home-content33 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-column2 {
              max-width: 100%;
            }
            .home-header37 {
              font-size: 24px;
            }
            .home-content34 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header38 {
              font-size: 24px;
            }
            .home-content35 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header39 {
              font-size: 24px;
            }
            .home-content36 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content37 {
              border-top-width: 0px;
            }
            .home-main {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .home-branding2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-burger-menu {
              display: flex;
            }
            .home-heading10 {
              font-size: 60px;
            }
            .home-note {
              align-items: flex-start;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-caption11 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .home-statistics {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-stat1 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header12 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption12 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header13 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption13 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat3 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header14 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption14 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-slider1 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-heading11 {
              font-size: 40px;
            }
            .home-caption15 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-slide-titles {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-slides {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-slider2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-slider-track {
              align-items: stretch;
            }
            .home-heading12 {
              font-size: 18px;
            }
            .home-caption16 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-caption17 {
              font-size: 14px;
            }
            .home-icon19 {
              width: 11px;
              height: 11px;
            }
            .home-heading13 {
              font-size: 18px;
            }
            .home-caption18 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-caption19 {
              font-size: 14px;
            }
            .home-icon21 {
              width: 11px;
              height: 11px;
            }
            .home-heading14 {
              font-size: 18px;
            }
            .home-caption20 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-caption21 {
              font-size: 14px;
            }
            .home-icon23 {
              width: 11px;
              height: 11px;
            }
            .home-heading15 {
              font-size: 18px;
            }
            .home-caption22 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-caption23 {
              font-size: 14px;
            }
            .home-icon25 {
              width: 11px;
              height: 11px;
            }
            .home-previous1 {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-icon27 {
              width: 14px;
              height: 14px;
            }
            .home-next1 {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-icon29 {
              width: 14px;
              height: 14px;
            }
            .home-get-started {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-heading16 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption24 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image15 {
              width: 300px;
            }
            .home-objectives {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-content15 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-objectives-list {
              width: 100%;
              flex-direction: column;
            }
            .home-growth {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-content16 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header21 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading17 {
              font-size: 40px;
            }
            .home-caption25 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption26 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-text39 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-icon31 {
              width: 40px;
              height: 40px;
            }
            .home-name1 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-from1 {
              width: auto;
              height: 100%;
            }
            .home-image16 {
              width: 100%;
            }
            .home-experience {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-square2 {
              left: -20px;
              width: 20%;
              bottom: -20px;
            }
            .home-image17 {
              width: 100%;
            }
            .home-content18 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header23 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header-container3 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading18 {
              font-size: 40px;
            }
            .home-caption27 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text47 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-icon40 {
              width: 40px;
              height: 40px;
            }
            .home-name2 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-from2 {
              width: auto;
              height: 100%;
            }
            .home-create {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-content20 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading19 {
              font-size: 36px;
            }
            .home-comparision {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-header-container4 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header26 {
              gap: var(--dl-layout-space-unit);
              align-items: center;
            }
            .home-heading20 {
              font-size: 40px;
            }
            .home-caption28 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text60 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text61 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text62 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text63 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text64 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text65 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text66 {
              line-height: 21px;
            }
            .home-text67 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text68 {
              line-height: 21px;
            }
            .home-text69 {
              line-height: 21px;
            }
            .home-text70 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text71 {
              line-height: 21px;
            }
            .home-text72 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text73 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text74 {
              line-height: 21px;
            }
            .home-data {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-heading21 {
              font-size: 36px;
            }
            .home-caption29 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image18 {
              width: 100%;
            }
            .home-image19 {
              width: 100%;
            }
            .home-customer {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-quote1 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author3 {
              width: 100%;
            }
            .home-name3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location1 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote3 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote4 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author4 {
              width: 100%;
            }
            .home-name4 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote5 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote6 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author5 {
              width: 100%;
            }
            .home-name5 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote7 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote8 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author6 {
              width: 100%;
            }
            .home-name6 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location4 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon41 {
              width: 14px;
              height: 14px;
            }
            .home-icon43 {
              width: 14px;
              height: 14px;
            }
            .home-faq {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-header33 {
              gap: var(--dl-layout-space-unit);
              align-items: center;
            }
            .home-heading23 {
              font-size: 36px;
            }
            .home-column1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-element14 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header34 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element15 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header35 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element16 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header36 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-column2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-element17 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header37 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element18 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header38 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element19 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header39 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-footer {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-links {
              gap: var(--dl-layout-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .home-branding1 {
              padding-top: var(--dl-layout-space-unit);
            }
            .home-hamburger {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-icon10 {
              width: 30px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero-content {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-heading10 {
              font-size: 36px;
            }
            .home-caption10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-button1 {
              text-align: center;
            }
            .home-heading11 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-slide-titles {
              display: none;
            }
            .home-image15 {
              height: 400px;
            }
            .home-text29 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text30 {
              font-size: 18px;
            }
            .home-text32 {
              font-size: 18px;
            }
            .home-text34 {
              font-size: 18px;
            }
            .home-heading17 {
              font-size: 36px;
            }
            .home-heading18 {
              color: rgb(255, 255, 255);
            }
            .home-text42 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-heading19 {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .home-button4 {
              text-align: center;
            }
            .home-header26 {
              gap: 0px;
              flex-direction: column;
            }
            .home-heading20 {
              color: rgb(255, 255, 255);
              text-align: center;
            }
            .home-text57 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-button5 {
              text-align: center;
            }
            .home-header33 {
              gap: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-links {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .home-bottom {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-button6 {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
