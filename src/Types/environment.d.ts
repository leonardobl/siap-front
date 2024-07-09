declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_VIACEP_URL: string;
      REACT_APP_IBGE_API_URL: string;
      REACT_APP_USUARIOS_API_URL: string;
      REACT_APP_API_URL: string;
      REACT_APP_URL: string;
      REACT_APP_ENVIRONMENT: string;
      REACT_APP_URL_LOCAL: string;
      REACT_APP_URL_STAGING: string;
    }
  }
}

export {};
