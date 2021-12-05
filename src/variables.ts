interface Variables {
  apiUrl: string;
  isSecureEnv: boolean;
}

export const variables: Variables = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  isSecureEnv: JSON.parse(import.meta.env.VITE_SECURE_ENV as string),
};