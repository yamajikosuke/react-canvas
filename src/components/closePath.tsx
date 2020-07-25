import React from "react";

export const ClosePath: React.FC = (): JSX.Element => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvasObj = canvasRef.current;
    if (canvasObj) {
      const ctx = canvasObj.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 0);
        ctx.lineTo(100, 100);
        ctx.lineTo(0, 100);
        ctx.closePath();
        ctx.stroke();
      }
    }
  });

  return (
    <main>
      <canvas ref={canvasRef} />
    </main>
  );
};
