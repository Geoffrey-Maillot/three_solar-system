import { AudioListener } from "three";

const createListener = (): AudioListener => {
  const listener = new AudioListener();
  return listener;
};

export { createListener };
