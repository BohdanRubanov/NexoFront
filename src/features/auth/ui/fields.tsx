import { useId } from "react";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export function AuthFields() {
	const emailId = useId();
	const passwordId = useId();
	return (
		<>
			<div>
				<Label htmlFor={emailId}>Email</Label>
				<Input
					id={emailId}
					type="email"
					placeholder="Enter your email"
					required
				/>
			</div>
			<div>
				<Label htmlFor={passwordId}>Password</Label>
				<Input
					id={passwordId}
					type="password"
					placeholder="Enter your password"
					required
				/>
			</div>
		</>
	);
}
