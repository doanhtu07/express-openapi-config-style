# Exclude dist

```bash
fd -E '.*/dist/.*' | fzf -m | xargs code -r
```

# Within src

```bash
fd -p '.*/src/.*' | fzf -m | xargs code -r
```
