const ROOT_API = process.env.REACT_APP_ROOT_API;

export const setRegister = async (data: any) => {
  const url = `${ROOT_API}/register`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const setLogin = async (data: any) => {
  const url = `${ROOT_API}/login`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
