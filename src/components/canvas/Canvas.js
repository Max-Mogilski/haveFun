import { useEffect, useRef } from "react";

const Canvas = ({ options }) => {
	const canvasRef = useRef(null);

	const mouse = {
		x: null,
		y: null,
	};

	let totalFilled = 0;
	let mousedownEvent;
	let mouseupEvent;
	let mousemoveEvent;

	const init = () => {
		const ctx = canvasRef.current.getContext("2d");
		let isTouching = false;

		const rectLeft = canvasRef.current.getBoundingClientRect().left;
		const rectTop = canvasRef.current.getBoundingClientRect().top;

		ctx.fillStyle = options.tilesColor;
		ctx.fillRect(0, 0, 200, 200);

		const scratch = () => {
			ctx.globalCompositeOperation = "destination-out";
			ctx.beginPath();
			ctx.arc(mouse.x, mouse.y, 15, 0, 2 * Math.PI);
			ctx.fill();
		};

		mousedownEvent = canvasRef.current.addEventListener(
			"mousedown",
			(event) => {
				mouse.x = event.clientX - rectLeft;
				mouse.y = event.clientY - rectTop;
				scratch();
				isTouching = true;
			}
		);

		mouseupEvent = canvasRef.current.addEventListener("mouseup", (event) => {
			isTouching = false;
		});

		mousemoveEvent = canvasRef.current.addEventListener(
			"mousemove",
			(event) => {
				mouse.x = event.clientX - rectLeft;
				mouse.y = event.clientY - rectTop;
				totalFilled += 1;
				if (isTouching) {
					scratch();
				}
				if (totalFilled > 150) {
					ctx.clearRect(0, 0, 200, 200);
				}
			}
		);
	};

	useEffect(() => {
		canvasRef.current.removeEventListener("mousedown", mousedownEvent);
		canvasRef.current.removeEventListener("mouseup", mouseupEvent);
		canvasRef.current.removeEventListener("mousemove", mousemoveEvent);
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
