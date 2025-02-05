import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useSelector } from "react-redux";

const HeroPage1 = () => {
  const [init, setInit] = useState(false);
  const currentTheme = useSelector((state) => state.theme) || 'light';

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
          value: "transparent",
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
        color: { value: currentTheme === 'dark' ? "#ffffff" : "#000000" },
        links: {
          color: currentTheme === 'dark' ? "#ffffff" : "#000000",
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
    [currentTheme]
  );

  // Theme based class names
  const containerClass = currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';
  const overlayTextClass = currentTheme === 'dark' ? 'text-white' : 'text-black';
  const heroContentClass = currentTheme === 'dark' ? 'text-left text-white' : 'text-left text-black';
  const textClass = currentTheme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className="relative">
      <div className={`px-20 h-screen flex justify-center items-center ${containerClass}`}>
        {/* Particle Background */}
        {init && (
          <Particles
            id="tsparticles"
            className="absolute inset-0 z-0"  // Set a lower z-index for particles
            options={options}
          />
        )}

        {/* Text Overlay */}
        <div className={`absolute select-none px-20 text-4xl md:text-6xl font-bold text-center mix-blend-screen z-10 ${overlayTextClass}`}>
          <div className="hero flex items-center px-20 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                alt="hero_img"
                src="https://img.freepik.com/premium-photo/3d-rendering-robot-artificial-intelligence-black-background-futuristic-technology-robot_844516-420.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className={`flex flex-col ${heroContentClass}`}>
                <h1 className={`${textClass}text-5xl font-bold`}>Information Technology</h1>
                <p className={`${textClass}text-5xl font-bold py-6`}>Excellence in Knowledge & Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage1;
