# Resume Website

A modern, sleek, and interactive resume website built with React and TypeScript. This application allows you to showcase your professional experience, education, publications, and skills with advanced filtering capabilities.

## Features

- **📄 Comprehensive Resume Display**: Profile, education, work experience, publications, and skills
- **🏷️ Label-Based Filtering**: Filter content by technical areas, domains, and industries
- **📅 Date Range Filtering**: View experiences from specific time periods or the last N years
- **🎨 Modern, Sleek Design**: Beautiful gradient UI with smooth animations
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔒 Type-Safe**: Full TypeScript support with JSON validation
- **🎯 Zero Backend**: Completely static, can be hosted anywhere
- **🔧 Easy Configuration**: All data in JSON files - no code changes needed

## Quick Start

### 1. Installation

```bash
npm install
```

### 2. Add Your Data

Edit `public/data/resume-data.json` with your information. See the [Data Structure](#data-structure) section below for details.

### 3. Validate Your Data

Before running the app, validate your JSON:

```bash
npm run validate
```

This will check your JSON structure and display any errors or a success message with a summary.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Data Structure

All resume data is stored in `public/data/resume-data.json`. Here's the structure:

### Profile

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "summary": "A brief professional summary...",
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
}
```

### Education

```json
{
  "education": [
    {
      "id": "edu1",
      "institution": "University Name",
      "location": "City, Country",
      "degree": "Ph.D. in Mechanical Engineering",
      "field": "Your Field of Study",
      "fromDate": "2010-09",
      "toDate": "2014-06",
      "description": "Optional description",
      "coursework": ["Course 1", "Course 2"],
      "labels": ["Label1", "Label2"]
    }
  ]
}
```

### Work Experience

Work experience supports multiple roles within the same company. Each highlight and skill can have its own labels for granular filtering.

```json
{
  "workExperience": [
    {
      "id": "work1",
      "company": "Company Name",
      "location": "City, Country",
      "fromDate": "2014-06",
      "toDate": "2021-12",
      "current": false,
      "roles": [
        {
          "id": "role1",
          "position": "Senior Engineer",
          "fromDate": "2014-06",
          "toDate": "2017-05",
          "description": "Optional role description",
          "highlights": [
            {
              "text": "Achievement or responsibility",
              "labels": ["Label1", "Label2"]
            }
          ],
          "skills": [
            {
              "name": "Python",
              "label": "Software Development"
            }
          ]
        }
      ]
    }
  ]
}
```

### Publications

```json
{
  "publications": [
    {
      "id": "pub1",
      "title": "Paper Title",
      "authors": ["Author 1", "Author 2"],
      "venue": "Conference or Journal Name",
      "date": "2020-06",
      "type": "conference",
      "link": "https://doi.org/...",
      "description": "Optional description",
      "labels": ["Label1", "Label2"]
    }
  ]
}
```

### Available Labels

Define all possible labels organized by category:

```json
{
  "availableLabels": {
    "technical": ["Solid Mechanics", "Software Development"],
    "domain": ["Management"],
    "industry": ["Aerospace", "Oil & Gas"]
  }
}
```

## Date Format

All dates use `YYYY-MM` format (e.g., `"2020-06"` for June 2020).

## Validation

The project includes a TypeScript validation script to ensure your JSON data is correctly formatted:

```bash
npm run validate
```

Or validate a specific file:

```bash
npm run validate path/to/your-data.json
```

The validator will:
- ✅ Check JSON syntax
- ✅ Verify required fields
- ✅ Validate data types
- ✅ Show a summary of your data
- ❌ Display helpful error messages if something is wrong

## Customization

### Changing Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #7c3aed;
  /* ... other variables */
}
```

### Modifying Components

All components are in `src/components/`:
- `Profile.tsx` - Header section with contact info
- `FilterPanel.tsx` - Sidebar with filtering controls
- `Education.tsx` - Education section
- `WorkExperience.tsx` - Work experience with nested roles
- `Publications.tsx` - Publications and conferences
- `Skills.tsx` - Dynamically extracted skills

Each component has its own CSS file for styling.

## Filtering Features

### By Labels

Click on any label in the filter panel to show only content with that label. You can select multiple labels - content matching ANY of the selected labels will be shown.

### By Date Range

Two options:
1. **Last N Years**: Enter a number (e.g., 5) to see only the last 5 years
2. **Custom Range**: Set specific from/to years

### Combined Filtering

You can combine label and date filters. Content must match BOTH the label criteria AND the date criteria.

## Deployment

### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Vercel

```bash
npm run build
vercel --prod
```

### GitHub Pages

```bash
npm run build
# Copy contents of 'dist' to your GitHub Pages repository
```

## Creating Job-Specific CVs

To create a tailored CV for a specific job:

1. Use the filtering features to show only relevant content
2. Take a screenshot or print to PDF
3. Or, create a separate JSON file (e.g., `resume-data-job1.json`) with only relevant entries
4. Validate it: `npm run validate public/data/resume-data-job1.json`
5. Temporarily rename it to `resume-data.json` and rebuild

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Styling with custom properties
- **ts-node** - Running validation scripts

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips

1. **Keep IDs Unique**: Each education, work experience, role, and publication should have a unique ID
2. **Consistent Labels**: Use the same label text across all entries for proper filtering
3. **Date Format**: Always use YYYY-MM format for dates
4. **Optional Fields**: Many fields are optional - include what's relevant for you
5. **Regular Validation**: Run `npm run validate` after any changes to catch errors early

## License

MIT - Feel free to use this for your own resume!

## Contributing

This is a personal resume template, but feel free to fork and customize for your needs!

---

**Built with ❤️ using React + TypeScript + Vite**
