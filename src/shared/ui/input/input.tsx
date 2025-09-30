import { useId } from "react";
import { IInputProps } from "./input.types";
import cn from "clsx";
import styles from "./input.module.scss";
export function Input(props: IInputProps) {
	const { label, iconLeft, iconRight, ...restProps } = props;
	const id = useId();
	return (
		<div className={cn(styles.inputCont)}>
			{label && <label htmlFor={id}>{label}</label>}
			<div className={cn(styles.inputWrapper)}>
				{iconLeft}
				<input id={id} className={cn(styles.input)} {...restProps} />
				{iconRight}
			</div>
		</div>
	);
}
