export const getData = async () => {
  // fetching data from the api
  const res = await fetch("http://localhost:3000/api/get");

  // if the data is not ok, we throw an error
  if (!res.ok) throw new Error("fail");

  // the data is converted to json
  return res.json();
};

export const getQueryData = async (id: string | null) => {
  // fetching data from the api matchin the id
  const res = await fetch(`http://localhost:3000/api/get/${id}`);

  if (!res.ok) throw new Error("fail");

  return res.json();
};

export const postData = async (data: string) => {
  // posting data through the api - the data is from the form
  const res = await fetch("http://localhost:3000/api/post", {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/json",
    },
  });

  // if the response is ok, the site will reload,
  // so the data goes away and the modal is closed
  res.ok ? location.reload() : console.log("something went wrong");
};
