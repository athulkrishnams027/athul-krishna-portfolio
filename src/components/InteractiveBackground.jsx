import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './InteractiveBackground.css';

export default function InteractiveBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const aurora1Ref = useRef(null);
  const aurora2Ref = useRef(null);
  const aurora3Ref = useRef(null);

  // Animation state in refs for zero React re-renders on animation frames
  const animFrameIdRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });
  const isTabVisibleRef = useRef(true);
  const prefersReducedMotionRef = useRef(false);
  const isTouchRef = useRef(false);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    // Accessibility check: reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = motionQuery.matches;

    const handleMotionChange = (e) => {
      prefersReducedMotionRef.current = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Touch device detection
    const touchQuery = window.matchMedia('(pointer: coarse)');
    isTouchRef.current = touchQuery.matches;

    const handleTouchChange = (e) => {
      isTouchRef.current = e.matches;
    };
    touchQuery.addEventListener('change', handleTouchChange);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resizeCanvas = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    const getParticleCount = () => {
      if (width <= 768) {
        return Math.floor(Math.max(16, Math.min(24, (width * height) / 38000)));
      }
      return Math.floor(Math.max(36, Math.min(58, (width * height) / 28000)));
    };

    const initParticles = () => {
      const count = getParticleCount();
      const particles = [];
      const isDarkMode = themeRef.current === 'dark';

      const lightColors = [
        'rgba(37, 99, 235,',   // Primary Blue
        'rgba(96, 165, 250,',  // Sky Blue
        'rgba(2, 132, 199,',   // Cyan Accent
        'rgba(59, 130, 246,',  // Royal Blue
      ];

      const darkColors = [
        'rgba(59, 130, 246,',  // Royal Blue
        'rgba(96, 165, 250,',  // Bright Sky Blue
        'rgba(56, 189, 248,',  // Bright Cyan
        'rgba(37, 99, 235,',   // Deep Blue
      ];

      const colors = isDarkMode ? darkColors : lightColors;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 1.1,
          colorBase: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          alpha: isDarkMode ? Math.random() * 0.45 + 0.3 : Math.random() * 0.3 + 0.15,
          alphaTarget: isDarkMode ? Math.random() * 0.45 + 0.3 : Math.random() * 0.3 + 0.15,
          pulseSpeed: Math.random() * 0.012 + 0.005,
        });
      }
      particlesRef.current = particles;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Tab visibility handling
    const handleVisibilityChange = () => {
      isTabVisibleRef.current = !document.hidden;
      if (isTabVisibleRef.current && !animFrameIdRef.current && !prefersReducedMotionRef.current) {
        lastTime = performance.now();
        animFrameIdRef.current = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Mouse & Parallax Listeners
    const handleMouseMove = (e) => {
      if (isTouchRef.current) return;
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;

      // Parallax shifts on aurora layers
      if (!prefersReducedMotionRef.current) {
        const normX = (e.clientX / width - 0.5) * 2;
        const normY = (e.clientY / height - 0.5) * 2;

        if (aurora1Ref.current) {
          aurora1Ref.current.style.transform = `translate3d(${normX * 18}px, ${normY * 14}px, 0)`;
        }
        if (aurora2Ref.current) {
          aurora2Ref.current.style.transform = `translate3d(${normX * -22}px, ${normY * -18}px, 0)`;
        }
        if (aurora3Ref.current) {
          aurora3Ref.current.style.transform = `translate3d(${normX * 12}px, ${normY * -12}px, 0)`;
        }
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Render loop
    let lastTime = performance.now();
    const connectionDist = width <= 768 ? 85 : 120;
    const connectionDistSq = connectionDist * connectionDist;
    const mouseInteractDist = 130;
    const mouseInteractDistSq = mouseInteractDist * mouseInteractDist;

    const render = (time) => {
      if (!isTabVisibleRef.current || prefersReducedMotionRef.current) {
        animFrameIdRef.current = null;
        return;
      }

      const dt = Math.min((time - lastTime) / 16.666, 2.5);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse spotlight lerping
      if (mouseRef.current.active && !isTouchRef.current) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = '1';
          spotlightRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
        }
      } else if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }

      const isDarkMode = themeRef.current === 'dark';
      const particles = particlesRef.current;
      const pLen = particles.length;

      // 1. Draw Particles
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        p.alpha += (p.alphaTarget - p.alpha) * p.pulseSpeed * dt;
        if (Math.abs(p.alphaTarget - p.alpha) < 0.03) {
          p.alphaTarget = isDarkMode
            ? Math.random() * 0.45 + 0.3
            : Math.random() * 0.3 + 0.15;
        }

        // Mouse proximity interaction
        if (mouseRef.current.active && !isTouchRef.current) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseInteractDistSq && distSq > 4) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouseInteractDist) * 0.75;
            p.x += (dx / dist) * force * dt;
            p.y += (dy / dist) * force * dt;

            const lineAlpha = (1 - dist / mouseInteractDist) * (isDarkMode ? 0.14 : 0.09);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(96, 165, 250, ${lineAlpha})`
              : `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase} ${p.alpha})`;
        ctx.fill();
      }

      // 2. Draw Connecting Lines
      ctx.lineWidth = 0.75;
      const lineMultiplier = isDarkMode ? 0.15 : 0.09;
      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / connectionDist) * lineMultiplier * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(96, 165, 250, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    if (!prefersReducedMotionRef.current) {
      animFrameIdRef.current = requestAnimationFrame(render);
    } else {
      initParticles();
      ctx.clearRect(0, 0, width, height);
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase} 0.3)`;
        ctx.fill();
      });
    }

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      touchQuery.removeEventListener('change', handleTouchChange);
    };
  }, [theme]); // Re-initialize when theme flips

  return (
    <div
      ref={containerRef}
      className={`blue-motion-environment ${isDark ? 'theme-dark' : 'theme-light'}`}
      aria-hidden="true"
    >
      {/* 1. Base Atmospheric Canvas */}
      <div className="bme-base-layer" />

      {/* 2. Animated Aurora Gradient Blobs */}
      <div className="bme-aurora-layer">
        <div ref={aurora1Ref} className="bme-aurora-blob bme-aurora-1" />
        <div ref={aurora2Ref} className="bme-aurora-blob bme-aurora-2" />
        <div ref={aurora3Ref} className="bme-aurora-blob bme-aurora-3" />
      </div>

      {/* 3. Technology Grid Overlay */}
      <div className="bme-grid-overlay" />

      {/* 4. Mouse-Responsive Spotlight */}
      <div ref={spotlightRef} className="bme-mouse-spotlight" />

      {/* 5. Particle & Connection Network Canvas */}
      <canvas ref={canvasRef} className="bme-particle-canvas" />

      {/* 6. Vignette Edge Depth Mask */}
      <div className="bme-vignette" />
    </div>
  );
}
