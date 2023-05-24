import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
              Hi, I'm Luis A. Fernandez, LMT!
          </h1>
          <h4 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white text-justify">
              I am an experienced Licensed Massage Therapist.
          </h4>
          <p className="mb-8 leading-relaxed text-justify">
              I specialize in helping my clients find relief from a wide variety of ailments, ranging from physical pain and discomfort, to emotional and mental stress. 
            <br /> <br />
              My goal is to help my clients find balance and harmony in their lives. I use a variety of techniques, including acupuncture, massage, and herbal remedies, to support my clients in their healing journey. I believe in treating each client as an individual and tailoring my treatments to meet their individual needs.
            <br /> <br />
              I look forward to working with each of my clients to help them achieve their health and wellness goals.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Get in touch!
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Select a Service!
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profile-picture.jpg"
          />
        </div>
      </div>
    </section>
  );
}