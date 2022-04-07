import { TransferTypes } from "./data-types";

const ROOT_API = process.env.REACT_APP_ROOT_API;

export const postTransfer = async (token: string, data: TransferTypes) => {
  const url = `${ROOT_API}/transfer`;

  console.log(data); debugger;
  console.log()

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
