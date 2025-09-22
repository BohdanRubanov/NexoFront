import { useId } from "react";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export function AuthFields() {
	const loginId = useId();
	return (
		<>
			<Label htmlFor={loginId}>Email</Label>{" "}
			<Input id={loginId} type="email" placeholder="Enter your email" required />
		</>
	);
}
