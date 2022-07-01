import pino from "pino";
import { logflarePinoVercel } from "pino-logflare";

const { stream, send } = logflarePinoVercel({
  apiKey: "iuaMYtlfCGtP",
  sourceToken: "21aa6e67-854d-4578-be94-820ac24b2efa",
});

const logger = pino(
  {
    browser: {
      transmit: {
        send: send,
      },
    },
    level: "debug",
    base: {
      env: process.env.VERCEL_ENV || "ENV not set",
      revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
  },
  stream
);

const formatObjectKeys = (headers) => {
  const keyValues = {};

  Object.keys(headers).map((key) => {
    const newKey = key.replace(/-/g, "_");
    keyValues[newKey] = headers[key];
  });

  return keyValues;
};

export { logger, formatObjectKeys };
