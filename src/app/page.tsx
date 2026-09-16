'use client';

/**
 * Home — the Invena home-8 page (src/app/home-8) section for section, with
 * Small Wonders content. Markup and class names are kept identical to the
 * template so every size, spacing and breakpoint comes from style.css.
 *
 * Omitted from home-8, deliberately: the "Our Trusted Clients" logo strip
 * (Small Wonders has no client logos to show yet — Invena's would be fake).
 */

import { useEffect, useRef, type RefObject } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BLOG_POSTS } from '../data/posts';
import { CONTACT } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

interface OdometerElement extends HTMLElement {
  od?: { update: (value: string | undefined) => void };
}

// ─── Odometer counters (same behaviour as home-8) ────────────────────────────
// Counters start when they scroll into view. An observer replaces the template's
// scroll handler, which measured every counter on every scroll event.
function useOdometer(refs: RefObject<OdometerElement[]>) {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let cancelled = false;
    import('odometer').then((module) => {
      if (cancelled) return;
      const Odometer = module.default;
      const counters = refs.current;
      counters.forEach((el) => {
        el.od = new Odometer({ el, value: 0, format: 'd', duration: 2000 });
      });
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as OdometerElement;
            el.od?.update(el.dataset.count);
            observer?.unobserve(el);
          });
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      counters.forEach((el) => observer?.observe(el));
    });
    return () => {
      cancelled = true;
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

// ─── GSAP SplitText heading reveal (same settings as home-8) ─────────────────
function useSplitText(refs: RefObject<HTMLHeadingElement | null>[]) {
  useEffect(() => {
    const splits: { revert: () => void }[] = [];
    let cancelled = false;
    (async () => {
      const SplitText = (await import('gsap/SplitText')).default;
      gsap.registerPlugin(SplitText, ScrollTrigger);
      if (cancelled) return;
      refs.forEach((ref) => {
        if (!ref.current) return;
        const split = new SplitText(ref.current, { type: 'lines,words,chars', linesClass: 'split-line' });
        splits.push(split);
        gsap.set(split.chars, { opacity: 0, x: 50 });
        gsap.to(split.chars, {
          scrollTrigger: { trigger: ref.current, start: 'top 95%' },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.02,
        });
      });
    })();
    return () => {
      cancelled = true;
      splits.forEach((split) => split.revert());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

const SERVICES = [
  { icon: '01', title: 'OKR Design', href: '/services' },
  { icon: '02', title: 'LEAP Framework', href: '/leap' },
  { icon: '03', title: 'AI Workload Audit', href: '/services' },
  { icon: '01', title: 'OKR Ladder', href: '/okr-ladder' },
];

const STORY = [
  { img: '07', title: 'Month 1 — Everyone Pushes', sub: "The numbers move. It feels like it's working." },
  { img: '08', title: 'Month 5 — Cracks Appear', sub: 'Mistakes that never used to happen. Quietly.' },
  { img: '09', title: 'Month 6 — Someone Leaves', sub: "They say they're tired. Nobody saw it coming." },
  { img: '08', title: 'Month 12 — The Honest Count', sub: 'You grew 11%, not 40%. Nothing stupid happened.' },
];

const BELIEFS = [
  'Every goal framework asks what you want. None ask who carries it — or what a machine could carry instead. We ask both before anything becomes a commitment.',
  'Our role is designed to shrink. Year two, the rituals run without us in the room. By year three you run this yourself — a better promise than a retainer.',
];

export default function HomePage() {
  const bannerOdo = useRef<OdometerElement[]>([]);
  const aboutOdo = useRef<OdometerElement[]>([]);
  const bannerTitle = useRef<HTMLHeadingElement>(null);
  const aboutTitle = useRef<HTMLHeadingElement>(null);
  const storyTitle = useRef<HTMLHeadingElement>(null);
  const whyTitle = useRef<HTMLHeadingElement>(null);
  const beliefTitle = useRef<HTMLHeadingElement>(null);

  const addOdo = (list: RefObject<OdometerElement[]>) => (el: HTMLSpanElement | null) => {
    if (el && !list.current.includes(el)) list.current.push(el);
  };

  useOdometer(bannerOdo);
  useOdometer(aboutOdo);
  useSplitText([bannerTitle, aboutTitle, storyTitle, whyTitle, beliefTitle]);

  return (
    <>
      {/* rts banner areas start — BannerEight */}
      <div className="rts-banner-area-eight banner-bg_eight bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-inner-content-eight">
                <div className="pre-title-area">
                  <img src="/assets/images/banner/icon/02.svg" alt="" />
                  <p>OKR &amp; AI Advisory · Bengaluru, India</p>
                </div>
                <h1 className="title rts-text-anime-style-1" ref={bannerTitle}>
                  <span>Growth That </span>Keeps Your People
                </h1>
                <p className="disc">
                  The plan was right. Everyone agreed. It still didn&apos;t happen. That&apos;s not
                  discipline — it&apos;s a capacity question.
                </p>
                <Link href="/contact" className="rts-btn btn-primary">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* counter up area start */}
        <div className="rts-counter-up-area-eight">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="counter-up-area-eight-banner-bottom">
                  <div className="single-counter-area-eight">
                    <h2 className="counter title">
                      <span className="odometer" data-count={50} ref={addOdo(bannerOdo)}>
                        00
                      </span>
                      +
                    </h2>
                    <span className="business">Workshops Led</span>
                    <div className="star-icon">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="single-counter-area-eight">
                    <h2 className="counter title">
                      <span className="odometer" data-count={15} ref={addOdo(bannerOdo)}>
                        00
                      </span>
                      +
                    </h2>
                    <span className="business">
                      Years With <br /> <br />
                      Founders
                    </span>
                  </div>
                  <div className="absolute-image">
                    <img src="/assets/images/banner/Hero Images/Hero 1.png" alt="Ekta Das, founder of Small Wonders" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter up area end */}
        <div className="banner-shape-area">
          <div className="shape-area">
            <img src="/assets/images/banner/shape/shape.svg" alt="" />
          </div>
        </div>
      </div>
      {/* rts banner areas end */}

      {/* rts service area start — ServiceEight */}
      <div className="rts-service-area-start rts-sectiong-gap">
        <div className="container padding-extend-300">
          <div className="row">
            <div className="col-lg-6 pr--30 pr_sm--10">
              <section className="main-wrapper-sticky">
                {SERVICES.map((service) => (
                  <div className="sticky-statement narrow" key={service.title}>
                    <div className="left-side">
                      <div className="icon">
                        <img src={`/assets/images/service/${service.icon}.svg`} alt="" />
                      </div>
                      <h5 className="title">{service.title}</h5>
                    </div>
                    <div className="right">
                      <Link href={service.href} className="arrow" aria-label={service.title}>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                ))}
              </section>
            </div>
            <div className="col-lg-6">
              <div className="title-style-one left mb--0 position-sticky top--120 mt_sm--40">
                <span className="pre">Our Services</span>
                <h2 className="title rts-text-anime-style-1 uppercase">Four Ways We Help</h2>
                <p className="disc">
                  Every goal framework asks what you want. None ask who carries it — or what a machine
                  could carry instead. We ask both before anything becomes a commitment.
                </p>
                <Link href="/services" className="rts-btn btn-primary">
                  View All Services
                </Link>
              </div>
              <div className="service-arrow-bottom-main">
                <img src="/assets/images/banner/shape/08.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row rts-section-gap">
            <div className="col-lg-12">
              <div className="service-bottom-cta">
                <h5 className="title">Want Growth That Keeps Your People?</h5>
                <div className="right">
                  <p>
                    Call Us Anytime! <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </p>
                </div>
                <div className="mid-image">
                  <img src="/assets/images/service/01.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts service area end */}

      {/* rts about us area start — AboutEight */}
      <div className="rts-about-us-area-8 bg_primary rts-section-gapTop pb--100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-style-one left mb--30">
                <span className="pre">About Us</span>
                <h2 className="title rts-text-anime-style-1 uppercase" ref={aboutTitle}>
                  Rituals That Make <br />
                  <span> Growth Survivable</span>
                </h2>
                <p className="disc">
                  Fifteen years with CXOs, founders and teams across industries. Fifty-plus leadership
                  and alignment workshops. We translate values into rituals and vision into execution —
                  the part most consultants hand over as a deck and leave.
                </p>
                <div className="counter-up-main-wrapper-8">
                  <div className="single-counter-up">
                    <h2 className="counter title">
                      <span className="odometer" data-count={15} ref={addOdo(aboutOdo)}>
                        00
                      </span>
                      +
                    </h2>
                    <p className="bottom">Years Experience</p>
                  </div>
                  <div className="single-counter-up">
                    <h2 className="counter title">
                      <span className="odometer" data-count={50} ref={addOdo(aboutOdo)}>
                        00
                      </span>
                      +
                    </h2>
                    <p className="bottom">Workshops Run</p>
                  </div>
                  <div className="single-counter-up">
                    <h2 className="counter title">
                      <span className="odometer" data-count={2} ref={addOdo(aboutOdo)}>
                        0
                      </span>
                    </h2>
                    <p className="bottom">Markets · India &amp; UAE</p>
                  </div>
                </div>
                <div className="sign-and-contact-area-8">
                  <div className="singn">
                    <span className="sw-signature">Ekta Das</span>
                  </div>
                  <div className="number-area-start">
                    <span>Call Us Anytime!</span>
                    <a href={CONTACT.phoneHref}>
                      <h5 className="number">{CONTACT.phone}</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-stock-area" aria-hidden="true">
                <h4 className="border-text">
                  Small <br />
                  Won <br /> ders
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content-image">
          <img
            src="/assets/images/banner/Hero Images/Hero 2.png"
            alt="Ekta Das, founder of Small Wonders"
            className="large-image"
          />
        </div>
      </div>
      {/* rts about us area end */}

      {/* rts business case area start — CaseStudies */}
      <div className="rts-business-case-area rts-section-gap" dir="ltr">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tite-between-area-8 position-relative">
                <div className="title-style-one eight left mb--30">
                  <span className="pre">How a Good Year Goes Wrong</span>
                  <h2 className="title rts-text-anime-style-1 uppercase" ref={storyTitle}>
                    The Missed <span>Quarter</span>
                  </h2>
                </div>
                <div className="next-prev-area">
                  <button type="button" className="swiper-button-next story-next" aria-label="Next">
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                  <button type="button" className="swiper-button-prev story-prev" aria-label="Previous">
                    <i className="fa-solid fa-arrow-left" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt--40">
          <div className="row">
            <div className="col-lg-12">
              <div className="flowating-right">
                <div className="case-studies-wrapper-main-5">
                  <Swiper
                    className="mySwiper-case-studies-5 pb--0"
                    modules={[Navigation, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop
                    speed={1000}
                    navigation={{ nextEl: '.story-next', prevEl: '.story-prev' }}
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                      1500: { slidesPerView: 3 },
                      1300: { slidesPerView: 3 },
                      991: { slidesPerView: 2 },
                      767: { slidesPerView: 2 },
                      575: { slidesPerView: 1 },
                      0: { slidesPerView: 1 },
                    }}
                  >
                    {STORY.map((slide) => (
                      <SwiperSlide key={slide.title}>
                        <div className="single-case-studies-four">
                          <Link href="/work" className="thumbnail">
                            <img src={`/assets/images/project/${slide.img}.webp`} alt="" />
                          </Link>
                          <div className="inner">
                            <Link href="/work">
                              <h3 className="title">{slide.title}</h3>
                              <span>{slide.sub}</span>
                            </Link>
                          </div>
                          <div className="eye">
                            <img src="/assets/images/project/eye.svg" alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts business case area end */}

      {/* rts-why-choose-us-area — WhyChooseUsEight */}
      <div className="rts-why-choose-area rts-section-gapBottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail-why-choose-8">
                <img src="/assets/images/why-choose/09.webp" alt="A leadership team working through a plan" />
              </div>
            </div>
            <div className="col-lg-6 pl--60">
              <div className="why-choose-area-right-content-8">
                <div className="title-style-one eight left mb--30">
                  <span className="pre">Why Choose Us</span>
                  <h2 className="title rts-text-anime-style-1 uppercase" ref={whyTitle}>
                    Why We&apos;re the <br /> <span>Right Partner</span>
                  </h2>
                </div>
                <div className="signle-consultancy mb--30">
                  <div className="icon">
                    <img src="/assets/images/about/icons/01.svg" alt="" />
                  </div>
                  <div className="information">
                    <h4 className="title">We Start by Taking Things Off</h4>
                    <p className="disc">
                      Every goal names what comes off the plate, and who agreed. Three months in, you
                      have a dated list of what we refused.
                    </p>
                  </div>
                </div>
                <div className="signle-consultancy">
                  <div className="icon">
                    <img src="/assets/images/about/icons/02.svg" alt="" />
                  </div>
                  <div className="information">
                    <h4 className="title">By Year Three You Run It</h4>
                    <p className="disc">
                      Year two, the rituals run without us in the room. That&apos;s why the first year
                      is worth trusting us with.
                    </p>
                  </div>
                </div>
                <Link href="/contact" className="rts-btn btn-primary mt--50">
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts-why-choose-us-area end */}

      {/* rts testimonials area start — TestimonialsEight, carrying Ekta's own words */}
      <div className="rts-testimonials-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one eight center mb--30">
                <span className="pre">In Ekta&apos;s Words</span>
                <h2 className="title rts-text-anime-style-1 uppercase" ref={beliefTitle}>
                  What We Believe About <br />
                  <span>Growing Well</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-lg-12">
              <div className="testimonails-8-mian-wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="circle-text">
                      <svg className="sw-circle-text" viewBox="0 0 285 285" aria-hidden="true">
                        <defs>
                          <path
                            id="sw-circle-path"
                            d="M142.5 142.5 m-118 0 a118 118 0 1 1 236 0 a118 118 0 1 1 -236 0"
                          />
                        </defs>
                        <text fill="#fff" fontSize="19" fontWeight="700">
                          <textPath href="#sw-circle-path" textLength="735" lengthAdjust="spacing">
                            IN EKTA&apos;S WORDS · SMALL WONDERS ·
                          </textPath>
                        </text>
                        <text x="142.5" y="205" textAnchor="middle" fill="#fff" fontSize="170" fontFamily="Georgia, serif">
                          &ldquo;
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="testimoanials-8-swiper">
                      <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop
                        speed={1000}
                        autoplay={{ delay: 6000 }}
                        className="mySwiper-testimonisl-8"
                        dir="ltr"
                      >
                        {BELIEFS.map((quote) => (
                          <SwiperSlide key={quote}>
                            <div className="testimonails-inner-content">
                              <p className="disc">{quote}</p>
                              <div className="author-area">
                                <div className="avatar">
                                  <img src="/assets/images/banner/Hero Images/Hero 2.png" alt="Ekta Das" />
                                </div>
                                <div className="content">
                                  <h5 className="title">Ekta Das</h5>
                                  <p>
                                    Founder at <span>Small Wonders</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts testimonials area end */}

      {/* rts blog area start — HomeBlogTwo */}
      <div className="rts-blog-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">Blog &amp; Articles</span>
                <h2 className="title rts-text-anime-style-1">Why OKRs work, and why they die</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--20">
            <div className="col-lg-12">
              <div className="blog-swiper-style-one">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={3}
                  spaceBetween={30}
                  loop
                  speed={1000}
                  pagination={{ el: '.blog-pagination', clickable: true }}
                  breakpoints={{
                    1500: { slidesPerView: 3 },
                    1300: { slidesPerView: 3 },
                    991: { slidesPerView: 3 },
                    767: { slidesPerView: 2 },
                    575: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                  }}
                  className="mySwiper-blog-one"
                >
                  {BLOG_POSTS.map((post, index) => (
                    <SwiperSlide key={post.slug}>
                      <div className="single-blog-area-one">
                        <p>
                          {post.readingTime} / <span>by {post.author}</span>
                        </p>
                        <Link href={`/blog/${post.slug}`}>
                          <h4 className="title">{post.title}</h4>
                        </Link>
                        <div className="bottom-details">
                          <Link href={`/blog/${post.slug}`} className="thumbnail">
                            <img src={`/assets/images/blog/0${(index % 9) + 1}.webp`} alt="" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-pagination blog-pagination" />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts blog area end */}

      {/* rts subscribe area start — NewsletterEight */}
      <div className="rts-subscribe-area-8 rts-section-gap bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">Start Here</span>
                <h2 className="title">
                  Start With One Conversation <br /> Not a <span>Proposal</span>
                </h2>
                <form action="/contact" method="get">
                  <input type="email" name="email" required placeholder="Enter Email Address" aria-label="Your email address" />
                  <button type="submit" className="rts-btn btn-primary btn-white">
                    Book a Call
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts subscribe area end */}
    </>
  );
}
