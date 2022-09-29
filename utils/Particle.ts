export interface MouseDetection {
  x: number | null;
  y: number | null;
  radius: number | null;
}

interface ParticleProps {
  cursor: MouseDetection;
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
}

export type ParticleType = {
  draw: () => void;
  update: () => void;
} | null;

export const Particle = ({
  cursor,
  canvas,
  x,
  y,
  size,
  directionX,
  directionY,
  color,
}: ParticleProps): ParticleType => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const draw = () => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
  };
  const update = () => {
    if (x > canvas.width || x < 0) {
      directionX = -directionX;
    }
    if (y > canvas.height || y < 0) {
      directionY = -directionY;
    }

    if (cursor.x == null || cursor.y == null || cursor.radius == null) return;
    let dx = cursor.x - x;
    let dy = cursor.y - y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < cursor.radius + size) {
      if (cursor.x < x && x < canvas.width - size * 10) {
        x += 10;
      }

      if (cursor.x > x && x > size * 10) {
        x -= 10;
      }

      if (cursor.y < y && y < canvas.height - size * 10) {
        y += 10;
      }

      if (cursor.y > y && y > size * 10) {
        y -= 10;
      }
    }

    x += directionX;
    y += directionY;

    draw();
  };

  return { draw, update };
};
