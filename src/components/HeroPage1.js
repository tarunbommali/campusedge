import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Shimmer } from 'react-shimmer';

const HeroPage1 = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Transparent background
        },
      },
      fpsLimit: 120,
      fullScreen: {
        enable: false,
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative w-full px-20 h-screen flex justify-center items-center bg-gray-900">
      {/* Shimmer Effect Placeholder */}
      {!init && (
        <Shimmer
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}

      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={options}
        />
      )}

      {/* Text Overlay */}
      <div className="absolute select-none px-20 text-4xl md:text-6xl font-bold text-center mix-blend-screen">
        <div className="hero flex items-center min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt="hero_img"
              src="https://img.freepik.com/premium-photo/3d-rendering-robot-artificial-intelligence-black-background-futuristic-technology-robot_844516-420.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="flex flex-col text-left">
              <h1 className="text-5xl font-bold">Information Technology</h1>
              <p className="py-6">Excellence in Knowledge & Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage1;
