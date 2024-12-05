import { useForm } from "react-hook-form";

type FormInput = {
	email: string;
	password: string;
};
export const FormPage = () => {
	const { register, handleSubmit } = useForm<FormInput>({
		defaultValues: {
			email: "fernando@google.com",
			password: "123456",
		},
	});

	const onSubmit = (myForm: FormInput) => {
		console.log(myForm);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3>Formularios</h3>

				<div className="flex flex-col space-y-2 w-[500px]">
					<input type="email" placeholder="email" className="border border-gray-300 p-2 rounded-xl" {...register("email", { required: true })}></input>

					<div className="flex flex-col space-y-2 w-[500px]"></div>
					<input type="password" placeholder="password" className="border border-gray-300 p-2 rounded-xl" {...register("password", { required: true })}></input>

					<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Ingresar</button>
				</div>
			</form>
		</>
	);
};
