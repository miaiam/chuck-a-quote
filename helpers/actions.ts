export const updateViewCount = async () => {
  return await fetch(`/api/viewCount`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
    }),
  });
};