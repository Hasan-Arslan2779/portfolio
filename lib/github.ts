import { Project } from "@/app/page";

type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
};

export const getGitHubProjects = async (
  username: string
): Promise<Project[]> => {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const repos: GitHubRepo[] = await res.json();

  // Sadece gerekli alanları map'le
  return repos.slice(0, 10).map((repo: GitHubRepo) => ({
    name: repo.name,
    description: repo.description || "Açıklama bulunmuyor",
    language: repo.language || "Bilinmiyor",
    html_url: repo.html_url,
  }));
};
