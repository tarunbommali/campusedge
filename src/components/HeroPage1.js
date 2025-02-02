import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
        color: { value: "#3b82f6" },
        links: {
          color: "#3b82f6",
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

  if (!init) return null;

  return (
    <div className="relative w-full px-20 h-screen flex justify-center items-center bg-gray-900">
      {/* Particle Background */}
      <Particles id="tsparticles" className="absolute inset-0" options={options} />

      {/* Text Overlay (Particles Move Over This) */}
      <h1 className="absolute text-[#324773] select-none px-20 text-4xl md:text-6xl font-bold text-center mix-blend-screen">
        Information Technology - Excellence in Knowledge & Innovation
      </h1>
    </div>
  );
};

export default HeroPage1;
