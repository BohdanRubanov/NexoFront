

interface IAuthTabsProps {
	signIn: React.ReactNode;
	signUp: React.ReactNode;
	classname?: string;
}

export function AuthTabs(props: IAuthTabsProps) {
	const { signIn, signUp, classname } = props;
	return (
		<Tabs defaultValue="SignIn" className={classname}>
			<TabsList >
				<TabsTrigger value="SignIn">Sign In</TabsTrigger>
				<TabsTrigger value="SignUp">Sign Up</TabsTrigger>
			</TabsList>
			<TabsContent value="SignIn">{signIn}</TabsContent>
			<TabsContent value="SignUp">{signUp}</TabsContent>
		</Tabs>
	);
}
