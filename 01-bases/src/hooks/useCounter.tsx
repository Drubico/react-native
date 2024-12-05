import { useState } from "react";

export const useCounter = () => {
	const [count, setcount] = useState<number>(10);

	const increaseBy = (num: number) => {
		// setcount(count + num);
		// setcount((prevCount) => prevCount + num);
		setcount(Math.max(count + num, 0));
	};

	return {
		// Properties
		count,

		// Actions
		increaseBy,
	};
};
