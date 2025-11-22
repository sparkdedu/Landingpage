import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Optimized star layers - reduced count
    const starLayers: Array<{
      stars: Array<{
        x: number;
        y: number;
        size: number;
        speed: number;
        opacity: number;
        twinkleSpeed: number;
        twinkleOffset: number;
      }>;
    }> = [];

    // Reduced star counts for better performance
    const layerConfigs = [
      { count: 50, speedMultiplier: 0.15, sizeRange: [0.5, 1] },
      { count: 40, speedMultiplier: 0.35, sizeRange: [1, 1.5] },
      { count: 30, speedMultiplier: 0.6, sizeRange: [1.5, 2] }
    ];

    layerConfigs.forEach(config => {
      const stars = [];
      for (let i = 0; i < config.count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: config.sizeRange[0] + Math.random() * (config.sizeRange[1] - config.sizeRange[0]),
          speed: config.speedMultiplier * (Math.random() * 0.5 + 0.5),
          opacity: Math.random() * 0.4 + 0.4,
          twinkleSpeed: Math.random() * 0.015 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }
      starLayers.push({ stars });
    });

    // Shooting stars - optimized
    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
    }> = [];

    const createShootingStar = () => {
      if (shootingStars.length < 3) { // Limit active shooting stars
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.4,
          length: Math.random() * 60 + 40,
          speed: Math.random() * 6 + 10,
          angle: Math.random() * Math.PI / 6 + Math.PI / 6,
          opacity: 1,
          active: true
        });
      }
    };

    // Less frequent shooting stars
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        createShootingStar();
      }
    }, 3000);

    // Reduced cosmic dust
    const dustParticles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }> = [];

    for (let i = 0; i < 25; i++) {
      dustParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: Math.random() * 0.15 + 0.08,
        opacity: Math.random() * 0.25 + 0.1,
        hue: Math.random() > 0.5 ? 220 : 260 // Blue or purple
      });
    }

    let time = 0;

    // Animation loop with performance optimization
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw cosmic dust - simplified
      dustParticles.forEach((particle) => {
        ctx.fillStyle = `hsla(${particle.hue}, 60%, 70%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      // Draw stars - simplified rendering
      starLayers.forEach((layer) => {
        layer.stars.forEach((star) => {
          const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
          const currentOpacity = star.opacity * twinkle;

          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.6})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          star.y += star.speed;

          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });
      });

      // Draw shooting stars - optimized
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        if (!star.active) continue;

        const dx = Math.cos(star.angle) * star.speed;
        const dy = Math.sin(star.angle) * star.speed;

        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - dx * star.length / star.speed,
          star.y - dy * star.length / star.speed
        );
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fill();

        star.x += dx;
        star.y += dy;
        star.opacity -= 0.01;

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <>
      {/* Deep space gradient base */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#020308] via-[#0a0b1e] to-[#0d0e24]" />
      
      {/* Animated nebula clouds - optimized */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-blue-900/15 via-purple-900/8 to-pink-900/15"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: "opacity" }}
      />

      {/* Large nebula effect 1 - reduced blur */}
      <motion.div
        className="fixed -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(107, 159, 232, 0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "transform"
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Large nebula effect 2 - reduced blur */}
      <motion.div
        className="fixed top-1/4 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(147, 112, 219, 0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "transform"
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />

      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: 0.85, willChange: "contents" }}
      />

      {/* Subtle vignette */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)"
        }} 
      />
    </>
  );
}