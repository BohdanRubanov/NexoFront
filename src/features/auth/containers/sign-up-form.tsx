import { AuthFormLayout } from "../ui/auth-form-layout";

export function SignUpForm() {
	return (
		<AuthFormLayout
			formTitle="Create your Nexo account"
			buttonText="Create an account"
			isSignUp={true}
		></AuthFormLayout>
	);
}
