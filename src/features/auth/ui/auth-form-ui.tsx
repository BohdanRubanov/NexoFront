import { SignInForm } from "../containers/sign-in-form";
import { SignUpForm } from "../containers/sign-up-form";
import { AuthTabs } from "./auth-tabs";

export function AuthFormUi() {
	return (
		<div className="w-[487px] h-[552px] rounded-[20px] border bg-white items-center justify-center">
			<AuthTabs
				signIn={<SignInForm />}
				signUp={<SignUpForm />}
			/>
		</div>
	);
}
