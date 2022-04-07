const ROOT_API = process.env.REACT_APP_ROOT_API;

export const getTransactions = async (token: string) => {
  const url = `${ROOT_API}/transactions`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  return response.json();
};
