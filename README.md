# Aurex Cleaning Services — Marketing Site

Vite + React + Tailwind single-page site for Aurex Cleaning Services (Calgary, AB), including EmailJS quote submissions.

## Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## EmailJS configuration

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an email service (Gmail, Outlook, etc.) and note the **Service ID**.
3. Create an email template with these template variables (match names **exactly**—they map to [`src/components/QuoteForm.jsx`](src/components/QuoteForm.jsx)):

   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{service}}`
   - `{{message}}`
   - `{{to_email}}` — routing label (currently `aurexcleanservices@gmail.com`)
   - `{{sent_at}}` — submission time in Calgary / Mountain timezone
   - `{{request_id}}` — UUID for the submission

   You can paste the ready-made layout from [`email-templates/quote-emailjs.html`](email-templates/quote-emailjs.html).

4. In the EmailJS template UI, set **Reply-To** to `{{from_email}}` so replies go to the visitor.

5. Set the template recipient to `aurexcleanservices@gmail.com` (or rely on your connected inbox settings).
6. Copy `.env.example` to `.env` and paste your IDs:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC=your_public_key_here
   ```

7. Restart `npm run dev` after changing `.env` (Vite reads env at startup).

## Content source

Review and FAQ copy in `src/data/reviewsData.js` and `src/data/faqData.js` is written for this build. If you have an older HTML source of truth, paste **verbatim** review quotes and FAQ text there so wording stays identical.

## Stack

- React 18, Vite 8
- Tailwind CSS 3
- `react-helmet-async`, `react-intersection-observer`, `@emailjs/browser`, `lucide-react`

Scroll-triggered sections use `src/hooks/useScrollAnimation.js` (hook) plus `src/hooks/ScrollReveal.jsx` (wrapper) so Fast Refresh / ESLint stay happy.
