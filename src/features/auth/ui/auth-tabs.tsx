import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

interface IAuthTabsProps {
	signIn: React.ReactNode;
	signUp: React.ReactNode;
}

export function AuthTabs(props: IAuthTabsProps) {
	const { signIn, signUp } = props;
	return (
		<Tabs defaultValue="SignIn" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="SignIn">Sign In</TabsTrigger>
				<TabsTrigger value="SignUp">Sign Up</TabsTrigger>
			</TabsList>
			<TabsContent value="SignIn">{signIn}</TabsContent>
			<TabsContent value="SignUp">{signUp}</TabsContent>
		</Tabs>
	);
}
