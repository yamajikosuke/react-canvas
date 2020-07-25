import React from "react";

export const FillRect: React.FC = (): JSX.Element => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvasObj = canvasRef.current;
    if (canvasObj) {
      const ctx = canvasObj.getContext("2d");
      if (ctx) ctx.fillRect(0, 0, 100, 100);
    }
  });

  return (
    <main>
      <canvas ref={canvasRef} />
    </main>
  );
};
