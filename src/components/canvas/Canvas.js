import { useEffect, useRef } from "react";

const Canvas = () => {
	const canvasRef = useRef(null);

	const mouse = {
		x: null,
		y: null,
	};

	let totalFilled = 0;

	const init = () => {
		const ctx = canvasRef.current.getContext("2d");
		let isTouching = false;

		const rectLeft = canvasRef.current.getBoundingClientRect().left;
		const rectTop = canvasRef.current.getBoundingClientRect().top;

		ctx.fillStyle = "#333333";
		ctx.fillRect(0, 0, 200, 200);

		const scratch = () => {
			ctx.globalCompositeOperation = "destination-out";
			ctx.beginPath();
			ctx.arc(mouse.x, mouse.y, 15, 0, 2 * Math.PI);
			ctx.fill();
		};

		canvasRef.current.addEventListener("mousedown", (event) => {
			mouse.x = event.clientX - rectLeft;
			mouse.y = event.clientY - rectTop;
			scratch();
			isTouching = true;
		});

		canvasRef.current.addEventListener("mouseup", (event) => {
			isTouching = false;
		});

		canvasRef.current.addEventListener("mousemove", (event) => {
			mouse.x = event.clientX - rectLeft;
			mouse.y = event.clientY - rectTop;
			if (isTouching) {
				scratch();
			}
			if (totalFilled > 150) {
				ctx.clearRect(0, 0, 200, 200);
			}
		});
	};

	useEffect(() => {
		if (canvasRef) {
			init();
		}
	});

	return (
		<canvas
			width={100}
			height={100}
			style={{
				border: "1px solid black",
				position: "absolute",
				width: "100%",
				height: "100%",
				borderRadius: "10px",
			}}
			ref={canvasRef}
		/>
	);
};

export default Canvas;
