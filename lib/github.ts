// lib/github.ts
export const getGitHubProjects = async (username: string) => {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  );
  const repos = await res.json();

  if (res.status !== 200) {
    throw new Error("GitHub API error");
  }

  return repos.slice(0, 10);
};
