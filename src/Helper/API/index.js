const HOST = "http://192.168.0.4:3000";

const post = async (route = "", body = {}) => {
  const url = HOST + "/" + route;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (response.status === 200) {
    return response.json();
  }
};
export default post;
