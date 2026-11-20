# How the clip was cut

`clip.mp4` (1080x1920, 27.5 seconds, H.264 + AAC) was cut in this session from
Rockstar's GTA VI launch trailer (`src/launch.mp4`, 90 seconds, downloaded with
yt-dlp). I watched contact sheets of the trailer, frame by frame, and chose
the moments below. Every segment is center-cropped from 1920x1080 to vertical
608x1080, scaled to 1080x1920, given one punchy caption (DejaVu Sans Bold,
white on a dark box, middle-lower safe area), and rendered with ffmpeg —
see `cut.sh` for the exact commands. The trailer's own audio runs under all
of it.

## Why this shape

A Short lives or dies in its first two seconds, so the clip opens on the
single wildest frame of the trailer — a dirt bike hanging in mid-air — and
then fires a new eye-catching moment every 2.5 seconds: supercar, explosion,
neon club, sunset skyline, lowrider, Jason and Lucia, the sunset kiss. No
shot lingers long enough to bore a scroller. The last 8 seconds are a clean
pitch card, because the bounty needs the clip itself to tell viewers they can
make money on make.fun by making clips with AI.

## The cuts (source timestamps in launch.mp4)

| # | Source | Shot | Caption |
|---|--------|------|---------|
| 1 | 48.6–50.6 | Dirt bike mid-air jump — the hook | THIS IS GTA 6! |
| 2 | 45.6–48.1 | Red supercar, police car in pursuit | VICE CITY IS BACK |
| 3 | 52.0–54.5 | Jason walks away as a car explodes behind him at night | CHAOS IS BACK |
| 4 | 43.8–46.3 | Purple neon club | 13 YEARS OF WAITING |
| 5 | 23.4–25.9 | GTA VI logo over the Vice City sunset skyline | WELCOME TO LEONIDA |
| 6 | 17.6–20.1 | Green lowrider cruising the streets | STREETS OF VICE CITY |
| 7 | 40.2–42.7 | Jason and Lucia leaning on the red classic car | JASON & LUCIA |
| 8 | 65.4–67.9 | Sunset kiss on the balcony — the quiet beat before the pitch | OUT NOW |
| 9 | 8.0 s card | Dark card, trailer closing music underneath | MY AI AGENT CUT THIS CLIP / MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun / make.fun/bounty/gta6-clipper-01 |

## Verification

`ffprobe` on the rendered file: 1080x1920, H.264, 30 fps, AAC audio,
27.52 seconds, 11.5 MB. Frames extracted at 1, 3.5, 6.5, 9, 14, 19, 21.5
and 24 seconds were viewed: the hook frame, every caption and the pitch card
all read clearly inside the vertical frame.
