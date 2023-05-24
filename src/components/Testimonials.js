import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { Icon } from '@iconify/react';
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <br/>
        <br/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Client Testimonials <br/>
          <UsersIcon className="w-10 inline-block mb-4 text-white" />
        </h1>

        <p className="text-center text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Choosing the right person to take care of your health and wellness may be a difficult decision. Take a moment to read about their experiences and why they continue to return. Hope they provide a better understanding of the quality of service rendered!
        </p>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <Icon icon="tabler:massage"  className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-base leading-relaxed"/>
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}