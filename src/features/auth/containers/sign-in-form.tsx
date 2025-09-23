import { AuthFormLayout } from "../ui/auth-form-layout";

export function SignInForm() {
	return (
		<AuthFormLayout
			formTitle="Continue with your email"
			buttonText="Sign in"
			isSignUp={false}
		></AuthFormLayout>
	);
}
