export const updateViewCount = async (row_id: number) => {
  return await fetch(`/api/viewCount`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: row_id,
    }),
  });
};