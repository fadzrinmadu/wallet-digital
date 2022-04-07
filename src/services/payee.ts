const ROOT_API = process.env.REACT_APP_ROOT_API;

export const getPayees = async (token: string) => {
  const url = `${ROOT_API}/payees`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  return response.json();
};
