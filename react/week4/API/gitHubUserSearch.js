export function getGithubUsers(user) {
  const url = `https://api.github.com/search/users?q=${user}`;
  return fetch(url).then(response => response.json());
}
