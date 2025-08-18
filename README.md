# AI Resume Analyzer

AI Resume Analyzer is a web application that allows users to upload resumes and receive feedback on formatting, ATS (Applicant Tracking System) compatibility, and job-fit scoring. Built with **React**, **TypeScript**, and **Vite**, it provides an interactive and intuitive interface for analyzing resumes and visualizing results.


## Features

- Upload resumes in PDF format
- Parse and display resume details
- ATS compatibility checks
- Resume scoring and visual feedback (gauges, badges, charts)
- Clean, responsive UI with TailwindCSS
- Modular architecture for future AI/ML integrations


## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** TailwindCSS
- **Routing:** React Router
- **Utilities:** pdf.js, custom parsing utilities
- **Deployment:** Docker support, ready for modern hosting platforms


## Project Structure

app/
├─ components/ # UI components (Uploader, Score visualizations, ResumeCard, etc.)
├─ routes/ # Application routes (upload, resume, auth, home)
├─ lib/ # Utility functions (PDF parsing, helpers)
├─ constants/ # Global constants
├─ types/ # TypeScript type definitions
public/ # Icons, images, pdf.js worker


## Getting Started

### Prerequisites

- Node.js (>= 18)
- npm or yarn


### Installation
```bash
git clone https://github.com/yourusername/ai-resume-analyzer.git
cd ai-resume-analyzer
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

App will be available at `http://localhost:5173`.


## Building for Production

Create a production build:

```bash
npm run build
npm run preview
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t ai-resume-analyzer .

# Run the container
docker run -p 3000:3000 ai-resume-analyzer
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you’d like to help improve the project.

## License

This project is licensed under the MIT License.

Built with ❤️ using React Router.
