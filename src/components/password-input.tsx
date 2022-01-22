import {
    InputGroup,
    Input,
    InputRightElement,
    Button,
    FormControl,
    FormLabel,
    InputLeftElement,
    Icon,
} from "@chakra-ui/react";
import React from "react";
import { HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";

type PasswordInputProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
    onChange,
}): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
                <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={HiLockClosed} color="gray.300" />}
                />
                <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    id="password"
                    name="password"
                    isRequired
                    onChange={onChange}
                />

                <InputRightElement width="4.5rem">
                    <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                        variant="ghost"
                    >
                        {show ? (
                            <Icon as={HiEyeOff} color="gray.500" />
                        ) : (
                            <Icon as={HiEye} color="gray.500" />
                        )}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
};
