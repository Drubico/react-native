// import { BasicTypes } from "./typescript/BasicTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { BasicFuncions } from "./typescript/BasicFunctions";

import { Counter } from "./components/Counter";
import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<AuthProvider>
			<div className="flex flex-col justify-center items-center h-svh">
				<h1 className="text-4xl mb-5">React + TS</h1>

				{/* <BasicTypes /> */}
				{/* <ObjectLiterals /> */}
				{/* <BasicFuncions /> */}
				{/* <Counter /> */}
				<LoginPage />
			</div>
		</AuthProvider>
	);
}

export default App;
