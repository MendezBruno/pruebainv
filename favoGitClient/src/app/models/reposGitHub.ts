export class ReposGitHub {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    language: string;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    open_issues_count: number;
    topics: string[];
    created_at: string;
    subscribers_count: number;
  }

// algunos de los atributos que vinen por si lo necesito
// "fork": false,
//   "url": "https://api.github.com/repos/octocat/Hello-World",
//   "archive_url": "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
//   "assignees_url": "http://api.github.com/repos/octocat/Hello-World/assignees{/user}",
//   "blobs_url": "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
//   "branches_url": "http://api.github.com/repos/octocat/Hello-World/branches{/branch}",
//   "collaborators_url": "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
//   "comments_url": "http://api.github.com/repos/octocat/Hello-World/comments{/number}",
//   "commits_url": "http://api.github.com/repos/octocat/Hello-World/commits{/sha}",
//   "compare_url": "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
//   "contents_url": "http://api.github.com/repos/octocat/Hello-World/contents/{+path}",
//   "contributors_url": "http://api.github.com/repos/octocat/Hello-World/contributors",
//   "deployments_url": "http://api.github.com/repos/octocat/Hello-World/deployments",
//   "downloads_url": "http://api.github.com/repos/octocat/Hello-World/downloads",
//   "events_url": "http://api.github.com/repos/octocat/Hello-World/events",
//   "forks_url": "http://api.github.com/repos/octocat/Hello-World/forks",
//   "git_commits_url": "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
//   "git_refs_url": "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
//   "git_tags_url": "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
//   "git_url": "git:github.com/octocat/Hello-World.git",
//   "issue_comment_url": "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
//   "issue_events_url": "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
//   "issues_url": "http://api.github.com/repos/octocat/Hello-World/issues{/number}",
//   "keys_url": "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
//   "labels_url": "http://api.github.com/repos/octocat/Hello-World/labels{/name}",
//   "languages_url": "http://api.github.com/repos/octocat/Hello-World/languages",
//   "merges_url": "http://api.github.com/repos/octocat/Hello-World/merges",
//   "milestones_url": "http://api.github.com/repos/octocat/Hello-World/milestones{/number}",
//   "notifications_url": "http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}",
//   "pulls_url": "http://api.github.com/repos/octocat/Hello-World/pulls{/number}",
//   "releases_url": "http://api.github.com/repos/octocat/Hello-World/releases{/id}",
//   "ssh_url": "git@github.com:octocat/Hello-World.git",
//   "stargazers_url": "http://api.github.com/repos/octocat/Hello-World/stargazers",
//   "statuses_url": "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
//   "subscribers_url": "http://api.github.com/repos/octocat/Hello-World/subscribers",
//   "subscription_url": "http://api.github.com/repos/octocat/Hello-World/subscription",
//   "tags_url": "http://api.github.com/repos/octocat/Hello-World/tags",
//   "teams_url": "http://api.github.com/repos/octocat/Hello-World/teams",
//   "trees_url": "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
//   "clone_url": "https://github.com/octocat/Hello-World.git",
//   "mirror_url": "git:git.example.com/octocat/Hello-World",
//   "hooks_url": "http://api.github.com/repos/octocat/Hello-World/hooks",
//   "svn_url": "https://svn.github.com/octocat/Hello-World",
//   "homepage": "https://github.com",
