---
title: Learn Enough Git
description: Learn how to manage source code using Git.
# featuredImg: async.webp
createdAt: 03/03/2021
tags:
- git
---

### Most used Git commands:

<div class="c-table-responsive">
  <table class="c-table">
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr class="c-table__info-row">
        <td colspan="2">git config - First-Time Git Setup</td>
      </tr>
      <tr>
        <td><code class="inline">git config --list</code></td>
        <td>To see all the configuration settings.</td>
      </tr>
      <tr>
        <td><code class="inline">git config --global user.name "John Doe"</code></td>
        <td>To setup global user name for the system.</td>
      </tr>
      <tr>
        <td><code class="inline">git config --global user.email johndoe@example.com</code></td>
        <td>To setup global email address for the system.</td>
      </tr>
      <tr>
        <td><code class="inline">git config --global core.editor vim</code></td>
        <td>To setup global editor to use in git.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git help - Getting Help</td>
      </tr>
      <tr>
        <td><code class="inline">git help config</code></td>
        <td>To get help for any git command.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">Git Basics</td>
      </tr>
      <tr>
        <td><code class="inline">git init</code></td>
        <td>To initialize an empty git repository.</td>
      </tr>
      <tr>
        <td><code class="inline">git add [FILE_NAME]</code></td>
        <td>To add files from working directory into staging area.</td>
      </tr>
      <tr>
        <td><code class="inline">git status</code></td>
        <td>To check the status of the repository.</td>
      </tr>
      <tr>
        <td><code class="inline">git clone [REPO_URL]</code></td>
        <td>To work with an existing git repository.</td>
      </tr>
      <tr>
        <td><code class="inline">git stash</code></td>
        <td>To go back to a clean working directory.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git commit - Save changes</td>
      </tr>
      <tr>
        <td><code class="inline">git commit</code></td>
        <td>To commit your changes. Doing so launches your editor of choice.</td>
      </tr>
      <tr>
        <td><code class="inline">git commit -m [MESSAGE]</code></td>
        <td>To commit message inline.</td>
      </tr>
      <tr>
        <td><code class="inline">git commit -a -m [MESSAGE]</code></td>
        <td>To skip the staging area.</td>
      </tr>
      <tr>
        <td><code class="inline">git commit --amend</code></td>
        <td>To undo the last commit.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git branch - Branching with Git</td>
      </tr>
      <tr>
        <td><code class="inline">git branch -d [BRANCH_NAME]</code></td>
        <td>To delete a branch.</td>
      </tr>
      <tr>
        <td><code class="inline">git branch -D [BRANCH_NAME]</code></td>
        <td>To delete an unmerged branch.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git remote - Working with remote codebase</td>
      </tr>
      <tr>
        <td><code class="inline">git remote</code></td>
        <td>To see the remote name.</td>
      </tr>
      <tr>
        <td><code class="inline">git remote -v</code></td>
        <td>To see the remote name and url.</td>
      </tr>
      <tr>
        <td><code class="inline">git remote add [REMOTE_NAME] [REMOTE_URL]</code></td>
        <td>To add remote repository.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git reset - Undo what you have done</td>
      </tr>
      <tr>
        <td><code class="inline">git reset HEAD [FILE_NAME]</code></td>
        <td>To unstage a file.</td>
      </tr>
      <tr>
        <td><code class="inline">git reset --hard HEAD~1</code></td>
        <td>To remove last commit.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git checkout - Checkout other brances</td>
      </tr>
      <tr>
        <td><code class="inline">git checkout -- [FILE_NAME]</code></td>
        <td>To discard changes in working directory.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git log - See some stats</td>
      </tr>
      <tr>
        <td><code class="inline">git log</code></td>
        <td>To see commit history in details.</td>
      </tr>
      <tr>
        <td><code class="inline">git log --oneline</code></td>
        <td>To see commit history in oneline.</td>
      </tr>
      <tr class="c-table__info-row">
        <td colspan="2">git diff - Differentiate what changed</td>
      </tr>
      <tr>
        <td><code class="inline">git diff</code></td>
        <td>To see the differences between working directory and staging area.</td>
      </tr>
      <tr>
        <td><code class="inline">git diff --staged</code></td>
        <td>To see the differences between staging area and last commit.</td>
      </tr>
    </tbody>
  </table>
</div>

### Further reading

- [Git Handbook ( From GitHub )](https://guides.github.com/introduction/git-handbook/)