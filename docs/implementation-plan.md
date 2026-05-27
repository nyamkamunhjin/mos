# MOS Frontend — Implementation Plan & Source of Truth

> This document is the single source of truth for the project and defines all development direction.

---

## 1. Image Gallery

**Goal:** Display and categorize various images that scroll and appear on the website.

- Categorize images (birds, nature, events, etc.)
- Auto-slideshow / carousel display
- Click-to-zoom (lightbox) on each image
- Show image metadata (title, credit, date)
- Responsive grid layout

---

## 2. Birds Section (Monetize)

**Goal:** Show a list of birds (all or a few highlighted ones). Each listed bird includes:
- Image
- Habitat map (geographic location)
- Sound / Audio

**Monetization:**
- Premium content behind paywall
- Download option for bird sounds/images
- Membership subscription

---

## 3. Donation

**Goal:** Display bank account information for donations.

- Bank account details
- Donation instructions
- Donation history / sponsor roll (nameroll)

---

## 4. National Pride Bird (Falcon)

**Goal:** Show falcon images in a dedicated section.

- Special gallery
- Falcon facts and information
- Historical significance

---

## 5. Books & Publications

**Goal:** Display new books and publications with pricing.

- Book listing (image, description, price)
- Purchase / order links
- Category classification

---

## 6. Comments & Forum

**Goal:** Increase engagement with a forum that supports photo uploads with credit.

- Users can leave comments
- Image upload (with photo credit)
- Forum section — discussions
- Admin moderation

---

## 7. Members

**Goal:** Update the members section with current information.

- Member list
- Member info (name, image, role)
- Add / edit members

---

## 8. Special Days & Auto Greeting

**Goal:** Add a special days section, with automatic greeting emails sent to subscribed email addresses.

- Special days calendar
- Email subscription system
- Automated greeting email on special days
- Email template design

---

## 9. Bubo — Introduction

**Goal:** Introduce Bubo, provide information, and link relevant content.

- What is Bubo? — introduction
- Contact / links
- Related information

---

## Tech Stack (proposed)

| Area | Technology |
|-------|-----------|
| Framework | Next.js (React) |
| Styling | Tailwind CSS |
| State | React Context / Zustand |
| Gallery | Swiper / Framer Motion |
| Maps | Leaflet / Mapbox |
| Audio | Web Audio API |
| Email | Resend / Nodemailer |
| Database | PostgreSQL / Supabase |
| Auth | NextAuth.js |
| Payment | Stripe / Mongolian banks |
| Forum | Custom / Disqus |

---

## Development Sequence

1. `docs/architecture.md` — Architecture, component structure
2. `docs/api.md` — API endpoint definitions
3. `docs/database.md` — Database schema
4. `docs/design.md` — Design system, UI/UX
5. `docs/deployment.md` — Deployment guide
