import { useEffect, useRef } from "react";

const glyphs = "01<>[]{}()$#@+=-:;ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ";
const frameInterval = 56;
const fontSize = 15;
const columnSpacing = 18;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let rafId = 0;
    let lastFrame = 0;
    let drops: number[] = [];
    let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const totalColumns = Math.ceil(width / columnSpacing);
      drops = Array.from(
        { length: totalColumns },
        () => Math.random() * -height * 1.4,
      );
    };

    const draw = (time: number) => {
      if (time - lastFrame < frameInterval) {
        rafId = window.requestAnimationFrame(draw);
        return;
      }

      lastFrame = time;

      context.fillStyle = "rgba(1, 4, 2, 0.08)";
      context.fillRect(0, 0, width, height);

      context.font = `${fontSize}px "IBM Plex Mono", monospace`;
      context.textBaseline = "top";

      drops = drops.map((currentY, index) => {
        const character =
          glyphs[Math.floor(Math.random() * glyphs.length)] || "0";
        const x = index * columnSpacing;
        const isLeadingChar = Math.random() > 0.94;

        context.fillStyle = isLeadingChar
          ? "rgba(240, 255, 245, 0.92)"
          : "rgba(76, 255, 139, 0.58)";
        context.fillText(character, x, currentY);

        if (currentY > height + Math.random() * 120) {
          return Math.random() * -320;
        }

        return currentY + fontSize + Math.random() * 9;
      });

      rafId = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    rafId = window.requestAnimationFrame(draw);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 opacity-55 mix-blend-screen"
    />
  );
}
