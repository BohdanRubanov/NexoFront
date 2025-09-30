import { ConfirmPassword } from "./confirm-password";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/ui/card";
import { SubmitButton } from "./submit-button";
import { AuthFields } from "./fields";

interface IAuthFormProps {
	formTitle: string;
	buttonText: string;
	isSignUp: boolean;
}

export function AuthFormLayout(props: IAuthFormProps) {
	const { formTitle, buttonText, isSignUp } = props;
	return (
		<Card>
			<CardHeader >
				<CardTitle className="flex-row">{formTitle}</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-6">
				<AuthFields />
				{isSignUp ? <ConfirmPassword /> : null}
			</CardContent>
			<CardFooter>
				<SubmitButton>{buttonText}</SubmitButton>
			</CardFooter>
		</Card>
	);
}
