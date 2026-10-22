# UMaine Ski & Snowboard Club Website

How to update the site, for officers. You don't need to know how to code.

---

## The 5-minute version

1. Go to the **editor**: `yoursite.org/admin` (on the live site), or see [Testing on your own computer](#testing-on-your-own-computer).
2. Pick what you want to change in the left sidebar.
3. Edit. **There's no need to click Publish.** When you leave an entry (back arrow, another entry, the browser Back button), it saves automatically. A green "Saved ✓" appears bottom-right.
4. Make as many changes as you like, one entry after another. The live site updates on its own about a minute after your last save.

Want to save without leaving? Press **Ctrl+S** (Mac: **Cmd+S**). If a save fails, for example because a required field is empty, you stay on the entry, a red message appears, and the problem field is highlighted.

That's it. Everything below is detail.

---

## What you can edit

| In the editor | What it controls | How often |
|---|---|---|
| **Site Settings → Settings & This Weekend** | The "This Weekend" car pool card on the home and Car Pools pages, every sign-up form link, dues, socials, meeting info | **Every week** during the season |
| **Events** | Events page, the home page's "Upcoming events", and each event's own page | A few times a semester |
| **Mountains** | Mountains page (including each mountain's live weather) and the home page strip | Once a season |
| **Officers** | Officers page | Once a year, after elections |
| **Sponsors** | Sponsors page, promo codes, and the home page sponsor bar | When deals change |
| **Pages & Backgrounds** | Club playlists (Music page), merch items, each page's photos and the background of each section (a color or a photo), the footer, and the Join page's "Join now" button | Whenever you like |
| **Testing Feedback** | Notes testers send with the Feedback button (testing only) | While testing |
| **Gallery Albums** | The preview photos on the Gallery page and the home page's "From the hill" strip, plus each album's Google Drive link | After each trip |

### Weekly routine (Car Pool Coordinator)
Open **Site Settings → Settings & This Weekend**, then:
1. Set the **Trip date** and **Mountain**.
2. Set **Sign-up status**:
   - **Open:** shows a green badge and the rider sign-up button. Also update **Seats left**.
   - **Full: waitlist open:** shows an amber badge and the waitlist button.
   - **Closed:** sign-ups are done for the week.
3. Update the **Meeting note** (where and when to meet).
4. If the Google Forms changed, paste the new links under **Sign-up & Form Links**.
5. Click the back arrow (top left). It saves automatically.

### Adding an event
**Events → New Event**, then fill in the title, start time, location and a one-line summary. Write the details in the big **Details** box. Events move from "Upcoming" to "Past" on their own once the date passes, but only after the site rebuilds. Any save triggers a rebuild.

### After elections (President / outgoing web officer)
**Officers:** edit each person (name, role, headshot). Use **Sort order** to set who shows first: 1 = President. Delete people who left the board.

### Changing a page's photos and backgrounds
Open **Pages & Backgrounds** and pick the page. Each section of the page has its own **background** box:
- **Background:** pick White, Light grey, Light blue, Navy, **Custom color**, or **Photo**.
- **Custom color:** pick it with the color picker (or type a code like `#8a1c1c`). Only used when Background is "Custom color".
- **Photo:** upload a photo. Only used when Background is "Photo". Wide landscape shots work best; text sits on top, so avoid busy photos.
- **Photo shade:** "Darken photo" (white text, the usual choice) or "Lighten photo" (dark text).

The text color switches automatically so it stays readable on dark or light backgrounds. If you pick "Photo" but don't upload one, or leave a custom color empty, the section keeps its normal color.

**Taste tip:** the site looks best mostly light, with one dark or photo band per page. The design is calm on purpose.

**"Join now" button:** **Pages & Backgrounds → Join page**, at the top. Change the button text or paste a new link (e.g. a new Google Form for next season).

### Mountain weather
Each mountain on the Mountains page shows **today's high and low** plus heads-ups for snow, rain, freezing rain, high wind and extreme cold. It updates on its own every time someone opens the page; nobody has to edit anything. The forecast comes from [Open-Meteo](https://open-meteo.com) (free, no account).

When you add a mountain, fill in its **Latitude** and **Longitude** (Google Maps: right-click the base lodge, then click the numbers to copy them). Leave both blank to hide the weather box. The heads-ups are a quick guide, not official National Weather Service warnings.

### Selling merch (order online, pick up at a meeting)
Edit everything in **Pages & Backgrounds → Merch page**. First set the club's **Venmo username** once in **Site Settings**.

- **Pickup info** (top of the Merch page entry): the headline, the **next pickup** (date, time, room) and details. Update it before each pickup meeting.
- **Each item has a Stage:**
  - **Coming soon:** shows the item with no buttons.
  - **Gauging interest:** shows an "I'm interested: tell us your size" button. Paste a Google Form link (name, size, quantity) in **Interest form link**. No money changes hands.
  - **Pre-order open:** shows a pre-order form button, a **Venmo deposit** button, the terms ("We order if 25 people pre-order by Nov 15. If not, your deposit is refunded in full.") and a progress bar. Fill in the **Pre-order form link**, **Deposit**, **Pre-orders needed**, **Pre-orders so far** (update it from the form responses every few days) and the **deadline**. The Venmo button fills in the amount and a note ("Club hoodie deposit - Your Name") so you can match payments to form entries.
  - **Available:** shows an **Order** button. Use **'Order' button link** (a form now, or a Square item link later). If it's blank, the button uses the Merch order form from Site Settings.
  - **Sold out.**
- **"What merch do you want?" section** (below the items): links to a Google Form where members suggest designs or items they'd buy. Set the form link, heading and text under **'What merch do you want?' section**. Use the answers to pick which item to put in *Gauging interest* next.
- **Matching payments:** keep the form's response spreadsheet open next to the club's Venmo and tick off each payment by the name in its note. If an order doesn't go ahead, refund the deposits from the business Venmo.
- **At the pickup meeting:** check names off the spreadsheet and collect any balance by Venmo or cash.
- **Later, with Square:** paste a Square item link in an item's **Order link**, or the whole store in **'Shop all merch' link**. Nothing else needs to change. Shipping can be added as an option on the order form whenever you're ready.

### Rail Jam page
**Pages & Backgrounds → Rail Jam page.** The page is in the top bar and starts blank ("Details … coming soon"). Add **Sections** top to bottom (e.g. Date & location, How it works, Sign up, Prizes, Sponsors). Each has a heading, text (leave a blank line between paragraphs), an optional button (text + link) and its own background. The title, small label and intro are editable too.

### Music page and club playlists
**Pages & Backgrounds → Music page → Playlists.** Add a playlist name, pick **Spotify / Apple Music / YouTube Music / Other**, and paste the share link (in the app: Share → Copy link).
- The **Music page** (About → Music) lists every playlist. Real Spotify and Apple Music links get a built-in player.
- Tick **Show on home page** to feature a playlist in the small "Club playlists" section on the home page (up to 3). The section hides itself when none are ticked. Its heading and intro are in Pages & Backgrounds → Home page.
- Optional **"Suggest a song" link** (e.g. a Google Form) adds a button at the bottom of the Music page.

### Photos (Google Drive)
All club photos live in one shared **Google Drive** folder, not on the website. The website shows only a few favorites from each trip, and every album links to its Drive folder.

**One-time setup:**
1. In the club's Google Drive, make a folder such as "UMaine SSC Photos", with one subfolder per trip.
2. Share the main folder as **Anyone with the link → Viewer**. Subfolders inherit this.
3. Paste its link into **Site Settings → Sign-up & Form Links → Photo library**.
4. Choose how members add photos and paste that link into **Photo upload link**. Two options:
   - a Drive folder shared as **Anyone with the link → Editor** (easiest, but anyone with the link can also delete), or
   - a **Google Form** with a file-upload question (safer; uploaders need a Google account, which every UMaine student has).

   Leave the field blank to hide the "Add your photos" button.

**After each trip:**
1. Make a subfolder for the trip in Drive and drop everyone's photos in.
2. In the editor: **Gallery Albums → New Album**. Add the title and date, and paste the subfolder's share link.
3. Under **Preview photos**, add 4 to 8 of the best shots, each with a short description. Only these are uploaded to the website.

The newest album shows first. The home page picks its photos from the newest albums on its own.

### Testing feedback
While the site is being tested, every page has a **Feedback** button in the bottom-right corner. Testers click it, can tap **Point at it on the page** to pick the exact button, photo or section they mean, choose Bug / Suggestion / Question / Looks good, write a note, and send. A **screenshot** of what they see is attached automatically (the part they pointed at is outlined in red); they can untick "Attach screenshot" to leave it out. Their name is optional and remembered on their device.

To review notes: in the editor, open **Testing Feedback**. Each note shows its page, the part of the page, the tester, their device (screen size, system, browser), and the screenshot (in the preview on the right). Use **Filter** (New, Fixed, Bugs…) or **Group by** (Status, Page, Type). Open a note to set its **Status** (New → In progress → Fixed or Won't fix) and add **Officer notes**. Delete notes you no longer need.

The button only appears while the site runs on the testing computer (`npm run dev`, including through the test tunnel). It disappears on the real live site.

---

## Rules that keep the site from breaking
- **Links must start with `https://`.** The editor will warn you if one doesn't.
- **Photos:** use JPG or PNG, ideally under 5 MB. The site resizes them automatically, so don't shrink them yourself. Headshots look best square.
- **Dates:** event times are Maine time.
- **Don't rename or delete Site Settings fields.** Just change the values.
- **Closing the browser tab doesn't auto-save.** Leave the entry (or press Ctrl+S) before closing the tab.
- If something looks wrong after saving, tell the web officer. Every change is saved in history and can be undone.

---

## Testing on your own computer
Use this to try things out without touching the live site. You need [Node.js](https://nodejs.org) (LTS) installed.

**Easy way (Windows):** double-click `start-editor.bat` in this folder. It opens the site and the editor in your browser. In the editor, click **Login** (no password needed locally). Edits save straight to the files on this computer and the site preview refreshes as you go. Close the two black windows when you're done.

**Manual way:** open two terminals in this folder:
```
npm install        # first time only
npm run cms        # terminal 1: local editor server
npm run dev        # terminal 2: the site, at http://localhost:4321
```
Then open http://localhost:4321/admin.

> Local edits change real files. If you're using git, `git status` shows exactly what changed and `git restore .` throws it all away.

---

## For the web officer (technical notes)

**Stack:** [Astro](https://docs.astro.build) (static site) + Tailwind CSS v4 + [Decap CMS](https://decapcms.org/docs/) for the `/admin` editor.

| Where | What |
|---|---|
| `src/content/{events,mountains,officers,sponsors,albums}/*.md` | One file per item. Front matter fields are checked by `src/content.config.ts`. |
| `src/data/settings.json` | Weekend card, links, dues, socials |
| `src/data/pages/*.json` | One file per page: section backgrounds, page photos, the Join page's "Join now" button (editor: Pages & Backgrounds) |
| `src/components/Panel.astro` + `src/lib/backgrounds.ts` | Renders an editable section background (color, custom color or photo) and flips text to light on dark backgrounds via `.on-dark` in `global.css` |
| `src/components/MountainCard.astro` | Mountain cards, including the live weather box (Open-Meteo, fetched in the browser from each mountain's `lat`/`lon`) |
| `src/assets/uploads/` | Images uploaded through the editor |
| `src/assets/logos/` | Club logos |
| `public/admin/config.yml` | The editor's fields. **Keep it in sync with `content.config.ts`** whenever you add or rename a field. |
| `public/admin/editor.html` | The editor page (`/admin` redirects here). Kept as a plain static file so the dev server's live reload doesn't refresh the editor on every save. |
| `public/admin/autosave.js` | Auto-save add-on: saves on leaving an entry, plus Ctrl+S. It drives Decap's own "Publish now" and listens to its `preSave`/`postSave` events. **Decap is pinned to 3.16.3. Re-test auto-save before upgrading.** |
| `src/pages/` | One file per page |
| `src/styles/global.css` | Colors, fonts and shared button/card styles, plus the dark-mode palette (`[data-theme="dark"]`; add `.keep-light` to anything that must stay light) |

**Editor access through the tunnel (testing):** `admin-gate-plugin.mjs` puts an access-code screen in front of `/admin` and forwards editing to the local helper (`npm run cms`) at `/__decap`, so testers with the code can edit through the tunnel. Their edits change the real files on the testing computer (undo with git). The code lives only in `site/.env` as `ADMIN_CODE=…` (git ignores this file, so it is never pushed); change it there and restart `npm run dev`. Opening `http://localhost:4321/admin` on the testing computer skips the code. Five wrong codes lock an address out for 10 minutes, and a correct code lasts 12 hours. None of this exists on the live site, where editing uses GitHub login.

**Testing through a tunnel:** the dev server only answers on domains listed in `server.allowedHosts` in `astro.config.mjs` (currently `umssbc.jb-walker.net`). Add any new tunnel domain there. The `/admin` editor only works on the computer running `npm run cms`.

**Testing feedback:** `src/components/FeedbackWidget.astro` (button + element picker, in `BaseLayout`) posts to `/__feedback`, which `feedback-plugin.mjs` (a Vite dev-server plugin in `astro.config.mjs`) saves as `feedback/<date>-<id>.json` (plus `<date>-<id>.jpg` for the screenshot, drawn in the browser by `modern-screenshot`). Fonts are self-hosted (`@fontsource`) so screenshots render them correctly. The editor lists them (collection `feedback`). The button checks the endpoint first, so it hides on `astro preview` and the real host. Before launch you can remove the widget from `BaseLayout.astro` and the plugin from `astro.config.mjs`.

**Commands:** `npm run dev` (dev server), `npm run build` (build to `dist/`; fails loudly if content is invalid), `npm run cms` (local editor backend).

**Going live with the editor** (one-time setup, not done yet):
1. Put this folder in a GitHub repo owned by a **club** account, not a personal one.
2. Host it on Netlify or Cloudflare Pages, with build command `npm run build` and output folder `dist`.
3. In `public/admin/config.yml`, set `backend.repo` to that repo. GitHub login also needs an OAuth app. Netlify provides one built in; other hosts need a small OAuth proxy (`base_url`).
4. Add each officer as a collaborator on the GitHub repo. That's what gives them editor access. Remove people when they leave the board.

**Many saves in a row:** each auto-save is one commit and starts a rebuild (about a minute). The site always ends up showing the newest commit, so a burst of edits is live shortly after the last one. Check your host's build settings if you want to skip intermediate builds.

**Things that refresh only on rebuild:** "Upcoming events", and what counts as "past". If the season goes quiet, schedule a daily rebuild with a deploy hook.

---

## Future scope
- **Events calendar:** a `/calendar` page showing every event in a month view (a list on phones), built from the same **Events** entries officers already edit. It would include "Add to calendar" links and a club calendar feed members can subscribe to. Not built yet.

---

## Revision history

**2026-10-17**
- **Dark mode:** a "Dark mode" switch in the About menu (desktop and phone). Each visitor's choice is remembered on their device; the site starts light. Logo art, light custom colors and lightened photos stay light.
- **Editor access code:** people with the link can open `/admin` through the tunnel after entering an access code (stored in `.env`, not in the repo), and edit through it. The site and editor share one address and port.
- **Testing:** bold **Admin** link in the top bar (and phone menu) that opens the editor in a new tab. Turn it off before launch in Site Settings → "Show 'Admin' link in the top bar".
- **Rail Jam page** (`/rail-jam`, in the top bar): a blank template filled from the editor with sections (heading, text, button, background).
- **Merch:** pictures centered on phones; the beanie and the new **flat brim hat** have **Order** buttons; every button on a merch card has its own editable link (Order, pre-order form, interest form, and an optional deposit link that can replace Venmo).

**2026-10-16**
- **Testing feedback:** each note includes a screenshot of the tester's screen, with the picked element outlined in red.
- **Merch (phones):** fixed the hoodie and beanie cards spilling off the side of the screen on iPhones.
- **Fonts:** now served from the site itself instead of Google Fonts (same look, slightly faster).
- **Merch:** "What merch do you want?" section below the items, linking to a merch-ideas Google Form.
- **Merch:** each item has a stage (coming soon, gauging interest, pre-order with a Venmo deposit and progress bar, available, sold out), plus pickup-at-a-meeting info and a "How ordering works" section. The club Venmo username is in Site Settings. Ready for Square links later.
- **Home page:** small "Club playlists" section with Spotify / Apple Music links (above the mountains), editable in Pages & Backgrounds.
- **Top bar:** shortened to Car Pools, Mountains, Events, Merch, an **About** dropdown (Officers, Sponsors, Gallery, Music, FAQ) and Join, like UVM's. On phones, the About pages are grouped under an About label.
- **Music page** (`/music`, under About): every club playlist, with built-in Spotify / Apple Music players. The home page features the ones marked "Show on home page".
- **Join page:** step 1 is now "Join our group on CampusGroups" (replaces "Sign the waiver").
- **Phones (tested at iPhone 16 size):** more room inside cards on small screens, the home page mountain cards now line up with the page edge and are wider, and the Feedback button is a small round icon on phones.
- **Events:** shows the next 4 upcoming events with a "See more events" button for the rest. Past events are in a collapsible dropdown. Events calendar added to future scope.
- **Mountains:** removed the member-discount line and the placeholder "ask an officer" deal tags (no group discounts right now; the deal field is still in the editor).
- **FAQ:** removed "What if I need to cancel?".
- **Testing feedback:** a Feedback button on every page (with "point at it" element picking) during testing. Notes are listed in the new **Testing Feedback** editor section with status, filters and officer notes.
- **Sponsors:** removed the "Thank you" label above the page title.
- **Mountains:** live weather on each mountain card: today's high and low, conditions, and heads-ups for snow, rain, freezing rain, high wind, thunderstorms and extreme cold. Data from Open-Meteo. New Latitude/Longitude fields in the editor.
- **Mountains:** Pleasant Mountain replaces Bretton Woods. The page now says "around Maine".
- **Mountains:** cards link to each mountain's live **Mountain report** where one exists (Sugarloaf, Sunday River, Saddleback, Black Mountain, Pleasant Mountain), otherwise to the trail map. New Mountain report link field in the editor. Trail map links fixed: the old Sugarloaf and Sunday River `/trail-map` links were dead.
- **Mountains:** website links fixed for Hermon Mountain (now skihermonmountain.com; the old domain is parked) and Black Mountain.
- **Car Pools:** removed the "Cancellations and strikes" section and its jump link. The timeline's Friday step and the FAQ cancel answer no longer mention strikes.
- **Testing:** the dev server accepts the Cloudflare Tunnel test domain.

**2026-10-15**
- **Pages & Backgrounds** (new editor section): every page's sections and the footer can be set to white, light grey, light blue, navy, a custom color, or a photo (darkened or lightened). Text color adjusts automatically.
- **Page photos editable:** home page banner photo, Join page picture, 404 picture, merch items (photo, name, description, price).
- **"Join now" button:** text and link moved from Site Settings to Pages & Backgrounds → Join page.
- **Gallery:** each album shows a few preview photos and links to its Google Drive folder. Buttons for the full photo library and for adding photos. The home page photo strip uses the newest albums. New Gallery Albums editor section.
- **Fix:** the home page no longer scrolls sideways on desktop.

**2026-10-14**
- First version: Astro site with home, Car Pools, Mountains, Events, Gallery, Officers, Sponsors, Merch, Join, FAQ and 404 pages.
- `/admin` editor (Decap CMS) with auto-save when leaving an entry and Ctrl+S. No Publish clicks.
- Sponsors are one flat list (no tiers).

## Project notes

The planning notes live in `docs/`: `PLAN.md` (the plan), `BUILD-BRIEF.md` and `BRIEF-PAGES.md` (build rules), `TESTING.md` (pre-demo checklist) and `CAR-POOL-FORMS.md` (how to build the Google Forms).
