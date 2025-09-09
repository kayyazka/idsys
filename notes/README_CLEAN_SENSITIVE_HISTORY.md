# Git Interactive Rebase Guide - Remove Specific Commit

This guide explains how to **remove a specific commit** from Git history using **interactive rebase**. It is useful for cleaning up commits containing sensitive information or unwanted changes.

---

## 1. Prepare Your Repository

Make sure your working directory is clean. Either commit or stash your changes:

```bash
git status
git add .
git commit -m "Save changes before rebase"
# OR
git stash
```

---

## 2. Start Interactive Rebase

Suppose you want to remove commit `01c081b`. Start rebase from the parent commit:

```bash
git rebase -i 01c081b^
```

---

## 3. Edit the Commit List

Git opens an editor with a list of commits after `01c081b`:

```
pick 01c081b  Add sensitive credentials
pick a1b2c3d  Update README
pick d4e5f6g  Add Jenkins pipeline
```

- Change `pick` to `drop` for the commit you want to remove:

```
drop 01c081b  Add sensitive credentials
pick a1b2c3d  Update README
pick d4e5f6g  Add Jenkins pipeline
```

- Save and exit (`:wq` if using Vim).

---

## 4. Resolve Conflicts (if any)

If conflicts appear during rebase:

```bash
git status
# Fix the conflicting files
git add <file>
git rebase --continue
```

Repeat until the rebase completes successfully.

---

## 5. Push the Updated History

Since history is rewritten, a **force push** is required:

```bash
git push origin main --force
```

> ⚠️ Note: The `main` branch may be **protected**. If so, either temporarily disable force push protection or push to a new branch and create a Pull Request.

---

## 6. Final Result

- The unwanted commit (`01c081b`) is completely removed.  
- The `main` branch history is cleaner and safer.  
- All team members must **sync** with the updated branch, either by:

```bash
git pull --rebase
```
or by re-cloning the repository.

---

## 7. Security Best Practices

- Never commit credentials or secrets to Git.  
- Use `.gitignore` for sensitive files.  
- Store secrets in Vault or a Secret Manager instead of Git.

