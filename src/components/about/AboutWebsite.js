import React from 'react';
import { useSelector } from 'react-redux';

const AboutWebsite = () => {
  const currentTheme = useSelector((state) => state.theme) || 'light';

  // Theme-based class names
  const containerClass = currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
  const headingClass = currentTheme === 'dark' ? 'text-[#d1d1d1]' : 'text-[#5c5c76]';
  const listClass = currentTheme === 'dark' ? 'text-gray-400' : 'text-black';

  return (
    <div className={`flex flex-col  p-4 md:p-8 mb-8 ${containerClass}`}>
      <p className="mb-6">
        Campus Edge is a comprehensive platform designed to empower university students by providing them with the necessary tools, resources, and connections to build successful careers.
      </p>

      <h2 className={`text-2xl font-semibold mb-3 ${headingClass}`}>Our Features</h2>
      <ul className={`list-disc list-inside mb-6 ${listClass}`}>
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
          <ul className={`list-disc list-inside ml-6 ${listClass}`}>
            <li>Accuracy</li>
            <li>Terminology</li>
            <li>Sentence Framing</li>
            <li>Confidence</li>
          </ul>
        </li>
      </ul>

      <h2 className={`text-2xl font-semibold mb-3 ${headingClass}`}>Our Technology Stack</h2>
      <p className="mb-6">
        Campus Edge is built using modern web technologies to ensure a seamless and efficient user experience. Our tech stack includes:
      </p>
      <ul className={`list-disc list-inside mb-6 ${listClass}`}>
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

      <h2 className={`text-2xl font-semibold mb-3 ${headingClass}`}>Our Mission</h2>
      <p>
        At Campus Edge, our mission is to bridge the gap between academic learning and professional success by providing students with the resources and guidance they need to excel in their chosen careers.
      </p>
    </div>
  );
}

export default AboutWebsite;
