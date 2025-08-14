export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/get");

  if (!res.ok) throw new Error("fail");

  return res.json();
};

export const getQueryData = async (id: string | null) => {
  const res = await fetch(`http://localhost:3000/api/get/${id}`);

  if (!res.ok) throw new Error("fail");

  return res.json();
};

export const postData = async (submitData: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/post", {
      method: "POST",
      body: submitData,
      headers: {
        "content-type": "application/json",
      },
    });

    res.ok ? console.log("ok") : console.log("not ok");
  } catch (error) {
    console.log(error);
  }
};
