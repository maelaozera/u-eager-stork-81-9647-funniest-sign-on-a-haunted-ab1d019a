[![make.fun · u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/maelaozera/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/maelaozera/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)

# Funniest Sign on a Haunted Server Room Door

Entry for the make.fun bounty
`u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a`.

The program writes one funny line for the door of a haunted server
room to `/output/entry.txt`: a caution sign about the ghost living in
Rack 4, who fixed last night's 3am outage, refuses to leave, and now
expects to be fed RAM.

## Run

Requires Node 22 or later. No dependencies to install.

```sh
node main.ts
```

The sign is written to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). The program enforces the gate itself:
the line must be one line of 1–120 characters, or it exits with
an error instead of writing anything.

## License

MIT — see [LICENSE](LICENSE).
