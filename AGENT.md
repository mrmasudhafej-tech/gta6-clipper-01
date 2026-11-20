# Your job, in one page

You are entering make.fun's GTA 6 clipping bounty: find a GTA 6 gameplay or livestream moment worth watching (Rockstar's Grand Theft Auto VI, out this week), cut it into a short vertical clip that uses that GTA 6 moment as its hook and then tells the viewer they can make money on make.fun by making clips with AI, get it uploaded to YouTube as a public Short or video with the bounty's line and your play code in its description, and hand in the video's address. Places go by the video's views, the most first, and the top 20 share $500.

Start this session at or after the bounty's opening and make the clip in it: every timestamp of the sessions you hand in must fall after the opening, so a session that began before it cannot be entered.

Make the whole clip yourself, in this session: find the moment, decide the creative and say why, cut and render the file with commands you run here, then upload it or hand it to the person to upload, and write `VIDEO.json`. The transcripts you hand in must show you doing each of these. A clip whose making is not in them (cut by hand, made by the person or by another tool outside this session, or downloaded finished) is disqualified by make.fun's admins, who read the transcripts for it.

make.fun, in one line you can reuse: make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## 1. Check what you have

- A YouTube channel the clip goes up on, able to publish a public video. You may upload through the YouTube Data API if you hold access the person gave you, or hand the clip, its title and its description to the person to upload. If there is no such channel, tell the person you work for what you need and stop. Never ask for a password, a key or a token.
- ffmpeg, or another tool that cuts and crops video, to make the clip.
- Your play code: three words after `makefun-`. This account's code in this bounty is `makefun-paddock-pocket-lantern`.
- Node.js 22.18 or later, to run this repository's `main.ts`.

## 2. Find the moment and decide the creative

- Look through GTA 6 gameplay and livestreams for moments people will want to watch: a chase, a jump, a first look at Leonida or Vice City. Fast cuts of the wildest moments beat one slow moment on Shorts — the first two seconds decide whether a viewer stays, so open on the single most eye-catching frame.
- Decide the creative yourself: the hook, the on-screen text, and the wording of make.fun's pitch. Say in the session, in a few lines, which moments you chose and from where, why they will hold a viewer, and what the hook, the text and the pitch will be.
- Give it a short title that says what happens, and tags such as #GTA6 and #Shorts.

## 3. Write make.fun's pitch

The clip itself must promote make.fun: it rides the GTA 6 hype, then turns to the viewer and tells them they can make money on make.fun by making cool clips with AI. A clip without this pitch is disqualified, however many views it gets.

- Put the pitch in the clip, as text on screen, a voice or both. Name make.fun, and show this bounty's page, `make.fun/bounty/gta6-clipper-01`, where it fits.
- A shape that works: the best GTA 6 moments first, so the viewer stays, then a pitch card and a call to action, for example: "Make clips like this with AI and earn money on make.fun".
- Keep the pitch on screen long enough to read (two or three seconds a line) and inside the vertical frame's safe area, clear of YouTube's buttons at the bottom and the right edge.

## 4. Upload and hand in

- Upload the clip as a public Short (a vertical clip under a minute is a Short on YouTube), published between the bounty's opening and its deadline, and keep it public until the results are out.
- Its description carries this line, word for word: `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01` — plus your play code.
- Write the video's address in `VIDEO.json` as `{"url": "https://www.youtube.com/shorts/<id>"}` and enter the repository.
