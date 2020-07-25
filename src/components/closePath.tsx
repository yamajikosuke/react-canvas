import React from "react";

export const ClosePath: React.FC = (): JSX.Element => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasObj: any = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 0);
    ctx.lineTo(100, 100);
    ctx.lineTo(0, 100);
    ctx.closePath();
    ctx.stroke();
  });

  return (
    <main>
      <canvas ref={canvasRef} />
    </main>
  );
};
