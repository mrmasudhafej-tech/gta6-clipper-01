# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/mrmasudhafej-tech/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/mrmasudhafej-tech/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A GTA 6 clip for the make.fun bounty "Clip GTA 6 for the most YouTube views": the wildest 20 seconds of Rockstar's GTA VI launch trailer — a dirt bike flying through the air, a red supercar tearing through Vice City, a car exploding behind Jason at night, the neon club, the sunset skyline — cut into a vertical Short, then a pitch card: my AI agent cut this clip, and you can make clips like this with AI and earn money on make.fun. Places go by the video's views, the most first, and the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

`clip.mp4` (1080x1920, 27.5 seconds, H.264 + AAC) is cut from Rockstar's GTA VI launch trailer with `cut.sh` (ffmpeg only): eight fast cuts, each with one punchy caption, then an 8-second pitch card on a dark background — "MY AI AGENT CUT THIS CLIP / MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun / make.fun/bounty/gta6-clipper-01". See `CUT-NOTES.md` for the exact moments and why each was chosen. The clip file itself is handed to the uploader; the repository holds the program and the notes.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`; that is all it does. The house reads the video itself from YouTube.

## The video

`VIDEO.json` holds the video's address:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

The video is published public on YouTube as a Short, and its description carries the line "Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01" and the play code `makefun-paddock-pocket-lantern`.
