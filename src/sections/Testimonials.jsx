import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Becoming a member was a turning point in my financial life. The support has been incredible!",
      name: "James Wilson",
      title: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 2,
      quote: "I've been able to save more money and get better interest rates. Highly recommend joining!",
      name: "Sarah Johnson",
      title: "Teacher",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 4.5,
    },
    {
      id: 3,
      quote: "The process was transparent with no hidden fees. I feel secure with my savings here.",
      name: "Michael Chen",
      title: "Software Engineer",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  ];

  return (
    <section className="container">
      <div className="section-title">
        <h2>
          What Our <span className="highlight">Members Say</span>
        </h2>
        <p>Real stories from our cooperative members</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="testimonial-card">
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>

              <footer>
                <div className="member-image">
                  <img src={t.image} alt={t.name} />
                </div>
                <div className="member-info">
                  <div className="name">{t.name}</div>
                  <div className="title">{t.title}</div>
                  <div className="rating">
                    {"★".repeat(Math.floor(t.rating))}
                    {t.rating % 1 ? "☆" : ""}
                  </div>
                </div>
              </footer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
