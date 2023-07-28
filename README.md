# Farmer Bank

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Online marketplace to help farmers find financial products. Built with [Next.js](https://nextjs.org) and [Go](https://go.dev)** ✨

## Running tasks

Install workspace dependencies:

```bash
pnpm i
```

Set `pnpm nx` alias for your active terminal or globally add to your shell configuration profile file:

```bash
alias pnx="pnpm nx --"
```

Start the web server then the web app:

```bash
pnx run-many -t serve -p server web --parallel=true
```
