import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	color: "primary" | "secondary";
	size: "lg" | "md";
	title?: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
}
