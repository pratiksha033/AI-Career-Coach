# AI Career Coach

An intelligent, full-stack web application that offers personalized career guidance using AI. This platform helps users build resumes, craft cover letters, practice interviews, and gain industry insights — all powered by modern web technologies.

➡️ **Live Demo:** https://ai-career-coach-beige-seven.vercel.app  
➡️ **Source Code:** https://github.com/pratiksha033/AI-Career-Coach

---

## 🚀 Features

- **AI-Powered Resume Builder** – Automatically generate professional, ATS-friendly resumes tailored to your experience and job goals.  
- **Dynamic Cover Letter Generator** – Create tailored cover letters with personalized content.  
- **Personalized Interview Preparation** – Practice mock interviews and receive feedback based on your selected skills and roles.  
- **Industry Insights & Trends** – Get real-time insights and recommendations to stay competitive.  
- **User Authentication** – Secure signup/login and user session management.  
- **Responsive UI** – Clean and intuitive interface optimized for all devices.

---

## 🛠️ Tech Stack


**Key Tools & Integration**
- **Next.js** – React framework for server-side rendering and routing.  
- **React** – UI building library.  
- **Tailwind CSS** – Utility-first styling framework.  
- **Prisma ORM** – Database modeling and querying.  
- **PostgreSQL** – Relational database backend.  
- **Vercel** – Deployment and hosting platform.

---

## 📁 Project Structure

    ```text
    ├── app/                # Application routes & pages
    ├── components/         # Reusable UI components
    ├── data/               # Static data or config
    ├── hooks/              # Custom React hooks
    ├── lib/                # Utilities & helpers
    ├── prisma/             # Database schema & migrations
    ├── public/             # Static assets
    ├── .env                # Environment variables
    ├── next.config.mjs     # Next.js config
    ├── tailwind.config.mjs # Tailwind config
    └── package.json        # Project metadata & scripts



---

## 🧠 How It Works

1. **User signs in** securely using email authentication.  
2. **User enters career goals** and personal details.  
3. Application sends input to AI routines that generate:
   - Resume content
   - Cover letters
   - Interview questions
   - Insights based on trends  
4. **Results are displayed** in an accessible and organized dashboard.

---

## 📥 Installation

Follow these steps to set up the project locally:

1. **Clone the repo**

    ```bash
    git clone https://github.com/pratiksha033/AI-Career-Coach.git
    cd AI-Career-Coach

2. Install dependencies

       npm install


3.Setup .env file

Create a .env file in the root and add your environment variables:

      DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"
       NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
    CLERK_SECRET_KEY=your_clerk_secret
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding


4.Run the project

    npm run dev


5.Open in Browser

    http://localhost:3000


## 🚀 Deployment

- This app is optimized for deployment on Vercel:

- Connect your GitHub repo to Vercel.

- Add environment variables in Vercel settings.

- Click “Deploy”.

You’ll get a production URL automatically.

## 🎯 Benefits

- Helps job seekers streamline resume & application workflows

= Provides personalized AI-driven career guidance

- Offers mock interview preparation tools

- Improves job readiness with data-informed suggestions

## 🙌 Contributing

Contributions are welcome!
If you’d like to improve the project, follow these steps:

- Fork the repository

- Create a new branch (git checkout -b feature/add-feature)

- Commit your changes

- Push to your fork and open a pull request

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact

For questions or support, reach out via pratikshaparihar679@gmail.com


---
