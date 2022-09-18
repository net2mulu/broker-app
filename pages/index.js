import Head from "next/head"
import Script from "next/script"


export default function Home() {
  return (
    <div>
      <Head>
        <title>SEMERE KIDANE</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div>
        {/* MENU BAR */}
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <i className="fa-light fa-signature"></i>
              SEMERE KIDANE
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#footer" className="nav-link contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* HERO */}
        <section className="hero hero-bg d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                <div className="hero-text">
                  <h1 className="text-white" data-aos="fade-up">Everything you need to know about the assets to rent</h1>
                  <a href="contact.html" className="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay={100}>Give us a Call any time</a>
                  <strong className="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay={200}><i className="fa fa-phone mr-2" /> 07117492 | 07633438</strong>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="hero-image" data-aos="fade-up" data-aos-delay={300}>
                  <img src="images/working-girl.png" className="img-fluid" alt="working girl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section className="about section-padding pb-0" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto col-md-10 col-12">
                <div className="about-info">
                  <h2 className="mb-4" data-aos="fade-up">We are the best <strong>dealers 7(broker)</strong> in ertirea with valuable connections</h2>
                  <p className="mb-0" data-aos="fade-up">Make sure to contact us before you decide on renting,buying a place like (villas, appartments, comercial shops) in ertirea.</p>
                </div>
                <div className="about-image" data-aos="fade-up" data-aos-delay={200}>
                  <img src="images/office.png" className="img-fluid" alt="office" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PROJECT */}
        <section className="project section-padding" id="project">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h2 className="mb-5 text-center" data-aos="fade-up">
                  Please take a look at<br></br>
                  <strong>What we offer</strong>
                </h2>
                <div className="owl-carousel owl-theme" id="project-slide">
                  <div className="item project-wrapper" data-aos="fade-up" data-aos-delay={100}>
                    <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ2Zakzmja4CiOhjiMkortp22AzAO_VYAn2fMM7uqYoMzAcuvvDuwB_VcDI2vqFP7KI" className="img-fluid" alt="project image" />
                    <div className="project-info">
                      <h3>
                        <a href="project-detail.html">
                          <span>Commercial Shops</span>
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="item project-wrapper" data-aos="fade-up">
                    <img src="https://i.pinimg.com/originals/1e/29/26/1e292677d2a1c2feb0ea612f48356713.jpg" className="img-fluid" alt="project image" />
                    <div className="project-info">
                      <h3>
                        <a href="project-detail.html">
                          <span>Guest houses</span>
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="item project-wrapper" data-aos="fade-up">
                    <img src="https://www.ribapix.com/images/thumbs/036/0366942_RIBA4474_600.jpeg" className="img-fluid" alt="project image" />
                    <div className="project-info">
                      <h3>
                        <a href="project-detail.html">
                          <span>Appartments</span>
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="item project-wrapper" data-aos="fade-up">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/56379526.jpg?k=cc74113269f666ce89437125d0bc4e3ae72ef2d9e582e46d0ef2e1d82610feaa&o=&hp=1" className="img-fluid" alt="project image" />
                    <div className="project-info">
                      <h3>
                        <a href="project-detail.html">
                          <span>Hotels</span>
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="item project-wrapper" data-aos="fade-up">
                    <img src="https://518192-1674976-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/11/dsc_1150-dsc_1154-765x510.jpg" className="img-fluid" alt="project image" />
                    <div className="project-info">
                      <h3>
                        <a href="project-detail.html">
                          <span>Vilas</span>
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer" className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
                <h1 className="text-white" data-aos="fade-up" data-aos-delay={100}>We Offer <strong>Assured</strong> Dealership.</h1>
              </div>
              <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay={200}>
                <h4 className="my-4">whatsapp </h4>
                <p className="mb-1">
                  <i className="fa fa-phone mr-2 footer-icon" />
                  002917117492
                </p>
                <p>
                  <a href="#">
                    <i className="fa fa-envelope mr-2 footer-icon" />
                    hello@company.com
                  </a>
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay={300}>
                <h4 className="my-4">Location</h4>
                <p className="mb-1">
                  <i className="fa fa-home mr-2 footer-icon" />
                  Eritirea, Asmara
                </p>
              </div>
              <div className="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay={400}>
                <p className="copyright-text">Copyright © 2020
                  <br />
                  <a rel="nofollow noopener" href="#">semerekidane.com</a></p>
              </div>
              <div className="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay={500}>
                <ul className="footer-link">
                  <li><a href="#">Stories</a></li>
                  <li><a href="#">Work with us</a></li>
                  <li><a href="#">wide offers</a></li>
                </ul>
              </div>
              <div className="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay={600}>
                <ul className="social-icon">
                  <li><a href="#" className="fa fa-instagram" /></li>
                  {/* <li><a href="#" className="fa fa-twitter" /></li> */}
                  <li><a href="#" className="fa fa-whatsapp" /></li>
                  <li><a href="#" className="fa fa-facebook" /></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Script src="js/jquery.min.js" />
      <Script src="js/bootstrap.min.js" />
      <Script src="js/aos.js" />
      <Script src="js/owl.carousel.min.js" />
      <Script src="js/smoothscroll.js" strategy="lazylazyOnload" />
      <Script src="js/custom.js" />
    </div>
  )
}
