export const getData = async () => {
    const res = await fetch('http://localhost:3000/api/get');

    if(!res.ok) throw new Error("fail");

    return res.json();
}

export const getQueryData = async (id:string | null) => {
    const res = await fetch(`http://localhost:3000/api/get/${id}`);

    if(!res.ok) throw new Error("fail");

    return res.json();
}