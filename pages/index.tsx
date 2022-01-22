import { Box, Flex, Image } from "@chakra-ui/react";
import { LoginForm } from "@components/login-form";
import React from "react";

const Home: React.FC = (): JSX.Element => {
    return (
        <Flex minH="100vh">
            <Box
                flex="1"
                position="fixed"
                top={0}
                right={0}
                bottom={0}
                left={0}
            >
                <Image
                    src="https://taskdev.mile.app/591c9afae08d42365820ece5754e7bfc.png"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
            </Box>
            <Box
                flex="1"
                position="fixed"
                top={0}
                right={0}
                bottom={0}
                left={0}
                bg="rgba(255,255,255,.8)"
                backdropFilter="blur(3px)"
            />
            <LoginForm />
        </Flex>
    );
};

export default Home;
