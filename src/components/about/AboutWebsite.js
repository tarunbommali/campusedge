import React from 'react'

const AboutWebsite = () =>  (
  <div className="flex flex-col text-black px-2 mb-8 ">
     <p className="mb-6">
        Campus Edge is a comprehensive platform designed to empower university students by providing them with the necessary tools, resources, and connections to build successful careers.
      </p>

      <h2 className="text-2xl text-[#5c5c76] font-semibold mb-3">Our Features</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Roadmaps:</strong> Explore trending job roles and the paths to achieve them.
        </li>
        <li>
          <strong>Learnings:</strong> Access a curated list of resources, including certifications (both free and paid), with advanced search and filter options.
        </li>
        <li>
          <strong>Interview Preparation:</strong> Dive into domain-based interview questions filtered by difficulty levels such as intermediate and advanced.
        </li>
        <li>
          <strong>AI Interview:</strong> Input job details like role, description, company, and tech stack to generate questions. Utilize speech-to-text to answer, and receive AI-driven feedback on:
          <ul className="list-disc list-inside ml-6">
            <li>Accuracy</li>
            <li>Terminology</li>
            <li>Sentence Framing</li>
            <li>Confidence</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl text-[#5c5c76] font-semibold mb-3">Our Technology Stack</h2>
      <p className="mb-6">
        Campus Edge is built using modern web technologies to ensure a seamless and efficient user experience. Our tech stack includes:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>React:</strong> A JavaScript library for building user interfaces.
        </li>
        <li>
          <strong>React Router:</strong> Facilitates dynamic routing within the application.
        </li>
        <li>
          <strong>Tailwind CSS:</strong> A utility-first CSS framework for styling.
        </li>
        <li>
          <strong>DaisyUI:</strong> A plugin for Tailwind CSS that provides pre-designed components.
        </li>
        <li>
          <strong>AI Integration:</strong> Utilizes @google/generative-ai for AI-driven features.
        </li>
        <li>
          <strong>Animations:</strong> Implements animations using libraries like lottie-react and react-tsparticles.
        </li>
      </ul>

      <h2 className="text-2xl text-[#5c5c76] font-semibold mb-3">Our Mission</h2>
      <p>
        At Campus Edge, our mission is to bridge the gap between academic learning and professional success by providing students with the resources and guidance they need to excel in their chosen careers.
      </p>
   
  </div>
);


export default AboutWebsite