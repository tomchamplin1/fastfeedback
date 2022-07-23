import Head from "next/head";

import { useAuth } from "@/lib/auth";
import { Button, Icon, Flex, Box, Stack } from "@chakra-ui/react";

import EmptyState from "@/components/EmptyState";

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        max-width="300px"
        h="100vh"
      >
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/sites"
          }
        `,
            }}
          />
          <title>Fast Feedback</title>
        </Head>
        <Icon viewBox="0 0 200 200" w={14} h={14}>
          <path
            d="M24.2102 155V45.9091H89.6222V57.6278H37.4205V94.4886H84.7216V106.207H37.4205V155H24.2102ZM112.247 155V45.9091H177.659V57.6278H125.458V94.4886H172.759V106.207H125.458V155H112.247Z"
            fill="black"
          />
        </Icon>
        {auth.user ? (
          <Button as="a" mt={4} size="md" href="/sites" passHref>
            View Dashboard
          </Button>
        ) : (
          <Stack>
            <Button
              mt={4}
              mb={2}
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              size="md"
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.800", transform: "scale(0.95)" }}
              onClick={(e) => auth.signinWithGithub()}
            >
              <Box mr={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>{" "}
              </Box>
              Sign In with GitHub
            </Button>
            <Button
              mt={4}
              fontWeight="medium"
              size="md"
              onClick={(e) => auth.signinWithGoogle()}
            >
              <Box mr={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </Box>
              Sign In with Google
            </Button>
          </Stack>
        )}
      </Flex>
    </div>
  );
}
