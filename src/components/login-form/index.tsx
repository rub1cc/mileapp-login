import {
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    Spinner,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { PasswordInput } from "@components/password-input";
import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useEffect, useState } from "react";
import { HiAtSymbol } from "react-icons/hi";

const Redirecting = (): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/map");
        }, 1000);
    }, []);

    return (
        <Stack
            position="relative"
            justifyContent="center"
            alignItems="center"
            w="100vw"
            h="100vh"
        >
            <Spinner />
            <Heading as="h2" size="md">
                Redirecting...
            </Heading>
        </Stack>
    );
};

export const LoginForm = (): JSX.Element => {
    const toast = useToast();
    const initialFocusRef = createRef<any>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [redirecting, setRedirecting] = useState<boolean>(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const submit = (e: React.FormEvent): void => {
        e.preventDefault();

        if (!email || !password) {
            toast({
                title: "Empty fields",
                description: "Please fill out all fields",
                status: "error",
                position: "top-right",
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        if (email != "admin" || password != "mileapp") {
            toast({
                title: "Login failed",
                description: "Email or password is incorrect",
                status: "error",
                position: "top-right",
                duration: 9000,
                isClosable: true,
            });
            return;
        }

        toast({
            title: "Login successful",
            description: "You are now logged in",
            status: "success",
            position: "top-right",
            duration: 9000,
            isClosable: true,
        });
        setRedirecting(true);
    };

    useEffect(() => {
        initialFocusRef?.current?.focus();
    }, []);

    if (redirecting) {
        return <Redirecting />;
    }

    return (
        <Stack flex="1" justifyContent="center" alignItems="center" zIndex="10">
            <Stack w="md" spacing={8} bg="white" p={8} rounded="lg" shadow="lg">
                <Heading as="h2" fontSize="2xl">
                    Sign in to your account
                </Heading>

                <form onSubmit={submit}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel htmlFor="email">
                                Email or username
                            </FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={
                                        <Icon
                                            as={HiAtSymbol}
                                            color="gray.300"
                                        />
                                    }
                                />
                                <Input
                                    ref={initialFocusRef}
                                    id="email"
                                    onChange={onChange}
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email or username"
                                    isRequired
                                />
                            </InputGroup>
                        </FormControl>
                        <PasswordInput onChange={onChange} />
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Checkbox defaultIsChecked>Remember me</Checkbox>
                            <Link href="#">
                                <a href="#">
                                    <Text m="0" color="blue.500">
                                        Forgot password?
                                    </Text>
                                </a>
                            </Link>
                        </Stack>
                        <Button colorScheme="blue" type="submit">
                            Login
                        </Button>
                    </Stack>
                </form>
                <Divider />
                <Stack spacing={0}>
                    <Text>or continue with</Text>
                    <SimpleGrid gap={4} columns={3}>
                        <Button variant="outline">
                            <Image
                                src="/icons/github-icon.svg"
                                alt="github"
                                height="25"
                            />
                        </Button>
                        <Button variant="outline">
                            <Image
                                src="/icons/linkedin-icon.svg"
                                alt="linkedin"
                                height="25"
                            />
                        </Button>
                        <Button variant="outline">
                            <Image
                                src="/icons/twitter-icon.svg"
                                alt="twitter"
                                height="25"
                            />
                        </Button>
                    </SimpleGrid>
                </Stack>
                <Text m="0" fontSize="sm">
                    Doesn't have an account?{" "}
                    <Link href="#">
                        <a href="#">
                            <Text m="0" color="blue.500" display="inline">
                                Sign up
                            </Text>
                        </a>
                    </Link>
                </Text>
            </Stack>
        </Stack>
    );
};
