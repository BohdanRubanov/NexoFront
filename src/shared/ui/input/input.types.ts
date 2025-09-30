import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
}
