import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Customer.css";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    city: "Chennai",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Very fast delivery & good quality fuel. Highly recommends.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    city: "Bangalore",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Excellent service! The delivery partner was polite & professional.",
  },
  {
    id: 3,
    name: "Arun Verma",
    city: "Hyderabad",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    review:
      "I use Fast Fuel for my office generator. Very reliable service.",
  },
  {
    id: 4,
    name: "Rahul Singh",
    city: "Delhi",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    review:
      "Booking was easy and delivery arrived exactly on time.",
  },
  {
    id: 5,
    name: "Neha Patel",
    city: "Ahmedabad",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Affordable prices and amazing customer support.",
  },
];

export default function CustomerSay() {
  return (
    <section className="customer-section py-4">

      <div className="container">

        <h2 className="text-center  mb-5">
          What Our <span>Customers</span> Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="testimonial-card">

                <img
                  src={item.image}
                  alt={item.name}
                  className="user-img"
                />

                <div className="content">

                  <div className="stars">
                    ★★★★★
                  </div>

                  <p>{item.review}</p>

                  <h5>{item.name}</h5>

                  <span>{item.city}</span>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}