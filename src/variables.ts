interface Variables {
  apiUrl: string;
}

export const variables: Variables = {
  apiUrl: import.meta.env.VITE_API_URL as string,
};