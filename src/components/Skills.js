import { Icon } from '@iconify/react';
import React from "react";
import { services } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <br/>
        <br/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center">
          Massage Therapy &amp; Acupuncture Services <br/> <Icon icon="tabler:massage" className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" />
        </h1>
          
        <p className="text-center text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          At my practice, I offer a variety of massage therapy and acupuncture services to help my clients find relief from physical pain and discomfort. The services rendered are focused on relieving tension, reducing stress, and restoring balance in the body. For a fantastic lifestyle, pair with nutritious eating!
        </p>

        <div className="flex flex-wrap m-4">
          {services.map((services) => (
              <div className="p-4 md:w-1/2 w-full">
                <div className=" justify-center h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                  <div >
                    <img
                      alt=""
                      src={services.image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="text-center title-font font-medium text-white">
                        {services.name}
                      </span>
                      <span className="text-center title-font font-medium text-white">
                        {services.price}
                      </span>
                      <span className=" text-justify text-gray-500 text-sm">
                        {services.desc}
                      </span>
                    </span>
                  </div>
                </ div>
              </ div>
          ))}
        </div>
      </div>
    </section>
  );
}