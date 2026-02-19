# Dominique Turatsinze - Personal Portfolio

## 📋 Project Overview
This is my personal portfolio website built for the Advanced Web Design and Development assignment at INES Ruhengeri. It showcases my skills, background, and projects as a Software Engineering student.

## 🚀 Features
- Responsive design (mobile, tablet, desktop)
- Dark/Light mode toggle
- Interactive GPA Calculator with weighted grading system
- CV upload and download functionality
- Contact form with validation
- Dynamic greetings based on time of day
- Clean folder architecture and semantic HTML5

## 🛠️ Technologies Used
- HTML5 (Semantic tags, accessibility)
- CSS3 (Flexbox, Grid, Box Model, Media Queries)
- JavaScript (DOM manipulation, LocalStorage, Form validation)
- Git & GitHub for version control

## 📁 Project Structure
portfolio/
├── index.html # Home page with hello section
├── about.html # Detailed about me page
├── skills.html # Technical and language skills
├── projects.html # Theoretical projects showcase
├── calculator.html # GPA Calculator with weighted marks
├── cv.html # CV upload and download system
├── contact.html # Contact form and information
├── css/ # Page-specific stylesheets
│ ├── style.css # Global styles
│ ├── home.css
│ ├── about.css
│ ├── skills.css
│ ├── projects.css
│ ├── calculator.css
│ ├── cv.css
│ └── contact.css
├── js/ # JavaScript files
│ ├── main.js # Global functions (greeting, date)
│ ├── calculator.js # GPA calculator logic
│ ├── contact.js # Form validation
│ ├── cv.js # CV download system
│ └── theme.js # Dark/light mode toggle
└── assets/ # Images and cv
└── cv/
    └── TURATSINZE_Dominique_CV.pdf
└── images/
    └── Domi.jpg


## 🎯 Key Functionality & AI Usage Declaration

### 1. **HTML Structure & CSS Styling**
- **Implemented by Me (Dominique):**
  - Semantic HTML5 structure for all pages
  - Color scheme, spacing, and typography choices
  - Consistent design language across all pages
  - Flexbox and Grid layouts for skills and cards
  - Responsive breakpoints and fluid design

- **AI Assistance (Minor):**
  - Helped debug CSS alignment issues on mobile devices
  - Suggested media query breakpoints for better responsiveness

### 2. **Dark/Light Mode Toggle**
- **Implemented by AI Assistant:**
  - Complete dark/light mode toggle functionality
  - Theme switching logic with localStorage persistence
  - CSS variables for theme management
  - Smooth transition effects between themes

- **My Contribution:**
  - Integrated the toggle into my existing navigation
  - Adjusted the color values to match my original design
  - Tested across all pages for consistency

### 3. **CV Page Upload & Download System**
- **Implemented by AI Assistant:**
  - Complete CV upload system with drag & drop
  - File validation (type, size limits)
  - localStorage storage for CV persistence
  - Download functionality for visitors
  - File preview system for PDFs

- **My Contribution:**
  - Designed the CV page layout and styling
  - Integrated the upload system into my design
  - Added the admin section for CV management

### 4. **GPA Calculator (JavaScript)**
- **Implemented by Me (Dominique) with AI Assistance:**
  - Core calculator logic and weighted average calculation
  - Grade classification system (A, B, C, F)
  - DOM manipulation for dynamic course rows
  - Input validation and error handling

- **AI Assistance:**
  - Helped debug calculation errors in the weighting system
  - Suggested improvements for validation logic
  - Assisted with array methods for data processing

### 5. **Responsive Design**
- **Implemented by Me:**
  - All responsive breakpoints and layouts
  - Mobile-first approach to design
  - Testing across different devices

- **AI Assistance (Minor):**
  - Suggested optimal breakpoint values
  - Helped fix flexbox wrapping issues on small screens

### 6. **Dynamic Features**
- **Greeting System (My Implementation):** Time-based greetings using JavaScript Date object
- **Dynamic Date/Year (My Implementation):** Automatic updates in footer
- **Form Validation (My Implementation):** Contact form validation with user feedback

## 🌐 Live Demo
https://domitnd.github.io/DomiPortfolio/

## 📱 Responsive Design
The portfolio is fully responsive and works on:
- **Mobile:** 320px - 480px
- **Tablet:** 481px - 768px
- **Desktop:** 769px and above

## 🧮 GPA Calculator Features
- Weighted average calculation based on credits
- Marks out of 20, GPA out of 5
- Grade classification:
  - A: 16-20 (Excellent)
  - B: 14-15 (Good)
  - C: 10-13 (Satisfactory)
  - F: Below 10 (Fail)
- Dynamic course row addition/removal
- Real-time validation

## 📄 CV Page Features
- **For Me (Admin):** Drag & drop upload, file management
- **For Visitors:** One-click download, file preview
- Supported formats: PDF, DOC, DOCX
- Max file size: 5MB

## 🎨 Design Choices
- **Color Palette (My Design):** Earthy tones with #1e3d3a (dark green), #2b4e4b (medium green), #aa7c5f (warm brown)
- **Typography:** Clean, readable fonts with proper hierarchy
- **Spacing:** Consistent padding and margins throughout
- **Unique Elements:** Custom card shapes (60px 20px border radius), double borders, layered shadows

## 📝 Detailed AI Usage Declaration

| Feature | My Implementation | AI Assistance |
|---------|-------------------|---------------|
| HTML Structure | 100% | 0% |
| Color Scheme | 100% | 0% |
| CSS Layout | 90% | 10% (debugging) |
| Responsive Design | 95% | 5% (breakpoint suggestions) |
| Dark/Light Mode | 10% | 90% |
| CV Upload System | 15% | 85% |
| GPA Calculator Logic | 70% | 30% |
| Form Validation | 85% | 15% |
| Dynamic Greeting | 100% | 0% |
| Git Commands | 50% | 50% (command help) |

## 🚦 How to Run Locally
1. Clone this repository
   ```bash
   git clone https://github.com/domitnd/DomiPortfolio.git

   
## Summary of AI Usage Declaration:

### What AI Did:
- **CV Page Upload System:** Complete drag & drop, file handling, localStorage
- **Dark/Light Mode Toggle:** Full theme switching functionality
- **CV Preview System:** PDF preview and download functionality

### What I (Dominique) Did:
- **All HTML Structure:** Every page layout and semantic tags
- **Color Scheme & Design:** Earthy tones, spacing, typography, unique card designs
- **Responsive Design:** Media queries and fluid layouts (with minor AI debugging help)
- **GPA Calculator Logic:** Core calculation logic and grade classification (with AI debugging assistance)
- **Form Validation:** Contact form validation logic
- **Dynamic Features:** Greeting system, date display

### Mixed Implementation:
- **CSS Debugging:** AI helped fix alignment issues
- **Git Commands:** AI provided command syntax
- **JavaScript Logic:** AI assisted with debugging and optimization
