# My Portfolio

A modern, responsive portfolio website built with Next.js and deployed on Vercel.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 📖 About

This is my personal portfolio website showcasing my projects, skills, and experience as a developer. The site is designed to be fast, accessible, and responsive across all devices.

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Built with Next.js for optimal loading speeds
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Dark/Light Mode** - Toggle between themes for better user experience
- **Interactive Animations** - Smooth transitions and micro-interactions
- **Project Showcase** - Detailed project cards with live demos and source code links
- **Contact Form** - Functional contact form with form validation
- **Blog Section** - Share thoughts and technical articles (optional)

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (optional)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) (optional)
- **Email Service:** [EmailJS](https://www.emailjs.com/) or [Nodemailer](https://nodemailer.com/) (optional)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_emailjs_public_key
```

## 💻 Usage

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Production Build Locally

```bash
npm run start
# or
yarn start
```

## 🚀 Deployment

This portfolio is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Sign up/login to [Vercel](https://vercel.com/)
3. Import your forked repository
4. Add your environment variables in Vercel dashboard
5. Deploy!

### Automatic Deployments

The site is set up for automatic deployments:

- **Production:** Deploys from `main` branch
- **Preview:** Deploys from pull requests and other branches

## 📁 Project Structure

```
├── public/
│   ├── images/
│   ├── icons/
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── ui/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── lib/
│   │   └── utils.js
│   └── data/
│       ├── projects.js
│       └── skills.js
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/data/personal.js` - Personal details, bio, social links
- `src/data/projects.js` - Your projects and portfolio items
- `src/data/skills.js` - Your technical skills and proficiencies

### Styling

- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind utility classes

### Content

- Replace placeholder images in `public/images/`
- Update your resume in `public/resume.pdf`
- Modify section content in respective component files

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/your-portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Your Name** - [@yourtwitterhandle](https://twitter.com/yourtwitterhandle) - your.email@example.com

Project Link: [https://github.com/yourusername/your-portfolio](https://github.com/yourusername/your-portfolio)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Platform](https://vercel.com/)
- [Lucide Icons](https://lucide.dev/)

---

⭐ Star this repo if you found it helpful!
