import { useId } from "react";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export function ConfirmPassword() {
	const confirmPasswordId = useId();
	return (
		<>
			<Label htmlFor={confirmPasswordId}>Confirm password</Label>
			<Input
				id={confirmPasswordId}
				type="password"
				placeholder="Confirm your password"
				required
			/>
		</>
	);
}
