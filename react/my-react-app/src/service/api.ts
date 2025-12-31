export function apiFetch(url: string, res: any) {
  console.log(url);
  return new Promise<{ username: string }>((resolve) => {
    setTimeout(() => {
      resolve({ username: res.username });
    }, 1000);
  });
}
