import React from "react";

export const FillRect: React.FC = (): JSX.Element => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvasObj: any = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    ctx.fillRect(0, 0, 100, 100);
  });

  return (
    <main>
      <canvas ref={canvasRef} />
    </main>
  );
};
