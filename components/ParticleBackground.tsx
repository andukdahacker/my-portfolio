import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { MouseDetection, Particle, ParticleType } from "../utils/Particle";

interface ParticleBackgroundProps {
  P?: any;
}

const ParticleBackground = ({
  children,
}: PropsWithChildren<ParticleBackgroundProps>) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>();
  let particleArray: ParticleType[] = [];
  const [cursor, setCursor] = useState<MouseDetection>({
    x: null,
    y: null,
    radius: null,
  });

  const animate = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i]?.update();
    }
  };

  const init = () => {
    if (!canvasRef.current?.width || !canvasRef.current?.height) return;
    let numberOfParticles =
      (canvasRef.current.width * canvasRef.current.height) / 10000;
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      let directionX = Math.random() * 5;
      let directionY = Math.random() * 5;
      let color = "blue";

      particleArray.push(
        Particle({
          cursor,
          canvas: canvasRef.current,
          x,
          y,
          directionX,
          directionY,
          size,
          color,
        })
      );
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    if (typeof window !== undefined) {
      setCanvasSize({ width: innerWidth, height: innerHeight });
      window.addEventListener("mousemove", (e) => {
        if (!canvasRef.current) return;
        setCursor({
          x: e.x,
          y: e.y,
          radius:
            (canvasRef.current.height / 80) * (canvasRef.current.width / 80),
        });
      });
    }
  }, [cursor]);

  useEffect(() => {
    init();
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize?.width}
      height={canvasSize?.height}
      className="absolute top-0 left-0 bg-red-200 n -z-10"
    />
  );
};

export default ParticleBackground;
