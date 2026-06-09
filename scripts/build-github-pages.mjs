import { execSync } from "node:child_process";

function resolveRepositoryName() {
  if (process.env.GITHUB_REPOSITORY_NAME) {
    return process.env.GITHUB_REPOSITORY_NAME;
  }

  try {
    const remote = execSync("git config --get remote.origin.url", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const normalizedRemote = remote.replace(":", "/");
    const match = normalizedRemote.match(/\/([^/]+?)(?:\.git)?$/);

    if (match?.[1]) {
      return match[1];
    }
  } catch {}

  return "Meu_Portifolio";
}

const repositoryName = resolveRepositoryName();
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER || "JoaoVictorAAbreu-Dev";

const env = {
  ...process.env,
  VITE_BASE_PATH: `/${repositoryName}/`,
  VITE_SITE_URL: `https://${repositoryOwner}.github.io/${repositoryName}`,
};

const command = process.platform === "win32" ? "npm.cmd run build" : "npm run build";

try {
  execSync(command, {
    env,
    stdio: "inherit",
  });
} catch (error) {
  process.exit(error.status ?? 1);
}
