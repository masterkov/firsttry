import { ENVS } from "../constants/Environments";

const baseUrl = environment => `https://${environment}.knowledgehook.com`;

const TEST1 = {
  url: baseUrl(ENVS.test1),
  isIntegration: true,
};

const TEST2 = {
  url: baseUrl(ENVS.test2),
  isIntegration: true,
};

const TEST3 = {
  url: baseUrl(ENVS.test3),
  isIntegration: true,
};

const LOCALHOST = {
  url : "http://localhost:port",
  isIntegration: false,
};

export const getEnvironment = (environment) : any => {
  switch (ENVS.test2) {
    case ENVS.test1:
      return TEST1;
    case ENVS.test2:
      return TEST2;
    case ENVS.test3:
      return TEST3;
    case ENVS.localhost:
      return LOCALHOST;
    default:
      throw new Error(`${environment} is not valid option`);
  }
};
