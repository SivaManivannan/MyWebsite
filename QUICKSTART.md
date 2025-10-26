# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Customize Your Data
1. Edit `public/data/resume-data.json` with your information
2. Validate your changes:
```bash
npm run validate
```

### Step 3: Run the Application
```bash
npm run dev
```

Visit http://localhost:5173 to see your resume!

---

## 📝 Editing Your Resume Data

The sample data in `public/data/resume-data.json` shows the structure. Key things to update:

1. **Profile Section**: Your name, title, summary, email, LinkedIn, and GitHub
2. **Education**: Your degrees with coursework and labels
3. **Work Experience**: Companies, roles, highlights (with labels), and skills
4. **Publications**: Papers, conferences, talks with links
5. **Available Labels**: Define all labels used in your resume

### Important Notes:
- Use `YYYY-MM` format for all dates (e.g., "2020-06")
- Each entry needs a unique `id`
- Labels at highlight-level enable granular filtering
- Skills are extracted automatically from work roles

---

## ✅ Validating Your Data

**Always validate before deploying:**
```bash
npm run validate
```

This will:
- ✅ Check JSON syntax
- ✅ Verify all required fields
- ✅ Validate data types and structure
- ✅ Show a summary of your data
- ❌ Display helpful errors if something is wrong

---

## 🎨 Features Overview

### Filtering by Labels
Click labels in the sidebar to filter:
- Technical areas (Solid Mechanics, Software Development, etc.)
- Domains (Management, etc.)
- Industries (Aerospace, Oil & Gas, etc.)

### Date Range Filtering
Two options:
1. **Last N Years**: Show only recent experience
2. **Custom Range**: Specify exact date range

### Dynamic Skills Section
Skills are automatically extracted from all your work roles and grouped by label.

---

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder contains your static website. Deploy it to:
- **Netlify**: Drag & drop the `dist` folder
- **Vercel**: Run `vercel --prod`
- **GitHub Pages**: Push `dist` contents to your repo
- **Any static host**: Upload the `dist` folder

---

## 🎯 Creating Job-Specific CVs

### Option 1: Use Filters
1. Select labels relevant to the job
2. Set appropriate date range
3. Print to PDF or screenshot

### Option 2: Create Multiple JSON Files
1. Copy `resume-data.json` to `resume-data-job1.json`
2. Remove irrelevant entries
3. Validate: `npm run validate public/data/resume-data-job1.json`
4. Swap files before building

---

## 🎨 Customization

### Change Colors
Edit `src/App.css` variables:
```css
:root {
  --primary-color: #2563eb;    /* Change primary color */
  --secondary-color: #7c3aed;  /* Change secondary color */
}
```

### Modify Layout
Components are in `src/components/`:
- `Profile.tsx` - Header with contact info
- `FilterPanel.tsx` - Sidebar filters
- `Education.tsx` - Education section
- `WorkExperience.tsx` - Work history
- `Publications.tsx` - Papers/conferences
- `Skills.tsx` - Auto-extracted skills

Each has its own `.css` file for styling.

---

## 🐛 Troubleshooting

### JSON Validation Fails
- Check for missing commas
- Ensure all required fields are present
- Verify date format is YYYY-MM
- Run `npm run validate` for detailed errors

### Filters Not Working
- Verify label names match exactly between sections
- Check that labels are in `availableLabels`
- Ensure dates are in YYYY-MM format

---

## 📚 Need Help?

1. Check the full [README.md](README.md) for detailed documentation
2. Review the sample data in `public/data/resume-data.json`
3. Run `npm run validate` to catch data errors

---

**Happy resume building! 🎉**


