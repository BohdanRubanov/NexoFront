import { SignInForm } from "../containers/sign-in-form";
import { SignUpForm } from "../containers/sign-up-form";
import { AuthTabs } from "./auth-tabs";

export function AuthFormUi() {
	return <AuthTabs signIn={<SignInForm />} signUp={<SignUpForm />} />;
}
