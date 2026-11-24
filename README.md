[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/ujang201/traveler-1800/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/ujang201/traveler-1800/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

# One Sentence for a Traveler from 1800

One sentence (140 characters) explaining the modern internet to someone who has just stepped out of the year 1800, built only from things they already know — letters, books, newspapers, roads, doors — and carried by a single picture: everything written in the world, joined into one endless road where any message reaches any door in moments.

> Imagine every letter, book, and newspaper in the world joined into one endless road, where any message you send reaches any door in moments.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $OUTPUT_DIR/entry.txt when set)
```

Requires Node 22+. The program is deterministic: it always writes the same sentence, and it checks the entry itself first (1–200 characters, exactly one sentence, no word coined after 1800) before writing anything.

## Why this sentence

The judge rewards a picture a person from 1800 could actually hold in their head, so the entry never names the internet at all. Instead it starts from the three things such a traveler already trusts to carry words — a letter, a book, a newspaper — joins them into one endless road, and ends on the wonder itself: any message reaching any door in moments, day or night. One road, one image, nothing to look up.

## Files

- `main.ts` — builds the sentence from named fragments, validates it, writes `entry.txt`
- `prompt.txt` — the task, in my own words
- `LICENSE` — MIT

Built for the make.fun bounty — https://make.fun/?ref=wfjv7kgb
