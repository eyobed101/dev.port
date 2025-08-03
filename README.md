# 🚀 Next.js Portfolio Starter Template

A beautifully designed, developer-friendly portfolio starter built with **Next.js 15 App Router**, **Tailwind CSS v4**, **Prisma**, and **Better Auth** for modern authentication. Ideal for developers looking to showcase their work, skills, and personal brand in a performant and scalable way.

---

## 🌟 Features

- 🔐 **Authentication with Better Auth**
- 🎨 **Modern UI components using Radix UI + Tailwind CSS**
- 💼 **Responsive Portfolio Pages (Projects, Experience, Contact)**
- 🌗 **Dark Mode Support with `next-themes`**
- 🖼️ **Framer Motion Animations**
- 🧩 **Form Validation with Zod + React Hook Form**
- ⚡ **App Router (Next.js 15 with Turbopack)**
- 🧠 **Zod + TypeScript strict typing**
- 📧 **Email Contact Form with Resend (Mail API)**

---

## 🛠 Tech Stack

| Category       | Tech                                             |
|----------------|--------------------------------------------------|
| Framework      | [Next.js 15](https://nextjs.org)                |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com)      |
| Animations     | [Framer Motion](https://www.framer.com/motion/) |
| Auth           | [Better Auth](https://www.npmjs.com/package/better-auth) |
| UI Components  | [Radix UI](https://www.radix-ui.com/) + `shadcn/ui` |
| Forms & Validation | `react-hook-form`, `zod`, `@hookform/resolvers` |
| Icons          | [Lucide](https://lucide.dev)                    |
| Database ORM   | [Prisma](https://www.prisma.io)                 |
| Email Service  | [Resend](https://resend.com)                    |
| Notifications  | [`sonner`](https://sonner.emilkowal.ski/)       |

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/nextjs-portfolio.git
cd nextjs-portfolio
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up your environment variables

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/db
NEXTAUTH_SECRET=your-auth-secret
RESEND_API_KEY=your-resend-key
```

### 4. Set up Prisma

```bash
npx prisma db push
```

(Optional: seed your database if needed)

### 5. Start the development server

```bash
npm run dev
```

---

## 📁 Folder Structure

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── dashboard/ (protected)
├── components/
│   ├── ui/
│   └── shared/
├── lib/
│   ├── auth/
│   └── utils/
├── prisma/
│   └── schema.prisma
├── public/
├── styles/
├── .env.example
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 📸 Pages Included

* `/` – Hero, About, Projects, Contact
* `/dashboard` – Protected (login required)
* `/login`, `/register`, `/forgot-password` – Auth pages via `better-auth`

---

## 🔐 Auth with Better Auth

* Email & password login
* JWT-based session handling
* Magic link and social login ready (via optional config)
* Simple integration with Prisma user model

---

## 🧠 Customization Tips

* Modify Tailwind theme in `tailwind.config.ts`
* Update metadata in `app/layout.tsx`
* Add more projects/components in `app/page.tsx` or split into `/projects`
* Use `prisma studio` to manage data:

  ```bash
  npx prisma studio
  ```

---

## 🧪 Scripts

```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Lint the project
npx prisma studio   # Open Prisma Studio
```

---

## 📦 Deployment

* ✅ Works perfectly with [Vercel](https://vercel.com/)
* Supports all platforms with Node.js 18+

---

## 🧑‍💻 Author

Made with 💙 by [Your Name](https://github.com/your-username)
Feel free to fork and customize!

---

## 📄 License

Licensed under the MIT License.
You’re free to use, modify, and distribute this template for personal and commercial projects.

---

## ✨ Preview

> *(Insert screenshots or Vercel deployment preview here)*

---

**Build your portfolio. Share your work. Impress the world.**

```

---

Let me know if you'd like a `live preview`, template upload to GitHub, or more personalization (e.g., adding project cards, testimonials, or blog support).
```
