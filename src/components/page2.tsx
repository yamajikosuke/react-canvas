import React from "react";

export const P2: React.FC = (): JSX.Element => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasObj: any = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(120, 20);
    ctx.lineTo(120, 120);
    ctx.lineTo(20, 120);
    ctx.closePath();
    ctx.stroke();
  });

  return (
    <main>
      <canvas ref={canvasRef} />
    </main>
  );
};

export default P2;
