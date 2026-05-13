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
3. Create an email template with these template variables (match the names exactly):

   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{service}}`
   - `{{message}}`
   - `{{to_email}}` (optional display—messages route through your service inbox)

4. Set the template recipient to `aurexcleanservices@gmail.com` (or rely on your connected inbox settings).
5. Copy `.env.example` to `.env` and paste your IDs:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. Restart `npm run dev` after changing `.env` (Vite reads env at startup).

## Content source

Review and FAQ copy in `src/data/reviewsData.js` and `src/data/faqData.js` is written for this build. If you have an older HTML source of truth, paste **verbatim** review quotes and FAQ text there so wording stays identical.

## Stack

- React 18, Vite 8
- Tailwind CSS 3
- `react-helmet-async`, `react-intersection-observer`, `@emailjs/browser`, `lucide-react`

Scroll-triggered sections use `src/hooks/useScrollAnimation.js` (hook) plus `src/hooks/ScrollReveal.jsx` (wrapper) so Fast Refresh / ESLint stay happy.
