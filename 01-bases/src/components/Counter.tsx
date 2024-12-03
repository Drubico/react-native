import React, { useState } from "react";

export const Counter = () => {
	const [count, setcount] = useState(10);

	const increaseBy = (num: number) => {
		// setcount(count + num);
		setcount(Math.max(count + num, 0));
		// setcount((prevCount) => prevCount + num);
	};

	return (
		<>
			<h3 className="text-2xl">
				Contador: <small className="font-bold">{count}</small>
			</h3>
			<div>
				<button className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700" onClick={() => increaseBy(+1)}>
					+1
				</button>
				<button className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700 " onClick={() => increaseBy(-1)}>
					-1
				</button>
			</div>
		</>
	);
};
