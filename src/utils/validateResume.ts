import type { ResumeData } from '../types/resume';

export function validateResumeData(data: unknown): data is ResumeData {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid data: must be an object');
  }

  const resume = data as Partial<ResumeData>;

  // Validate profile
  if (!resume.profile) {
    throw new Error('Missing required field: profile');
  }
  validateProfile(resume.profile);

  // Validate arrays
  if (!Array.isArray(resume.education)) {
    throw new Error('Invalid field: education must be an array');
  }
  if (!Array.isArray(resume.workExperience)) {
    throw new Error('Invalid field: workExperience must be an array');
  }
  if (!Array.isArray(resume.publications)) {
    throw new Error('Invalid field: publications must be an array');
  }

  // Validate each education entry
  resume.education.forEach((edu, index) => {
    validateEducation(edu, index);
  });

  // Validate each work experience entry
  resume.workExperience.forEach((work, index) => {
    validateWorkExperience(work, index);
  });

  // Validate each publication entry
  resume.publications.forEach((pub, index) => {
    validatePublication(pub, index);
  });

  // Validate available labels
  if (!Array.isArray(resume.availableLabels)) {
    throw new Error('availableLabels must be an array');
  }

  return true;
}

function validateProfile(profile: unknown): void {
  const p = profile as any;
  const required = ['name', 'title', 'summary', 'email', 'linkedin', 'github'];
  
  for (const field of required) {
    if (typeof p[field] !== 'string') {
      throw new Error(`Profile: missing or invalid required field '${field}'`);
    }
  }
}

function validateEducation(edu: unknown, index: number): void {
  const e = edu as any;
  const required = ['id', 'institution', 'location', 'degree', 'field', 'fromDate', 'toDate', 'labels'];
  
  for (const field of required) {
    if (!e[field]) {
      throw new Error(`Education[${index}]: missing required field '${field}'`);
    }
  }

  if (!Array.isArray(e.labels)) {
    throw new Error(`Education[${index}]: labels must be an array`);
  }

  if (e.coursework && !Array.isArray(e.coursework)) {
    throw new Error(`Education[${index}]: coursework must be an array`);
  }
}

function validateWorkExperience(work: unknown, index: number): void {
  const w = work as any;
  const required = ['id', 'company', 'location', 'fromDate', 'current', 'roles'];
  
  for (const field of required) {
    if (w[field] === undefined) {
      throw new Error(`WorkExperience[${index}]: missing required field '${field}'`);
    }
  }

  if (typeof w.current !== 'boolean') {
    throw new Error(`WorkExperience[${index}]: 'current' must be a boolean`);
  }

  if (!Array.isArray(w.roles) || w.roles.length === 0) {
    throw new Error(`WorkExperience[${index}]: roles must be a non-empty array`);
  }

  w.roles.forEach((role: any, roleIndex: number) => {
    validateRole(role, index, roleIndex);
  });
}

function validateRole(role: unknown, workIndex: number, roleIndex: number): void {
  const r = role as any;
  const required = ['id', 'position', 'fromDate', 'highlights', 'skills'];
  
  for (const field of required) {
    if (!r[field]) {
      throw new Error(`WorkExperience[${workIndex}].roles[${roleIndex}]: missing required field '${field}'`);
    }
  }

  if (!Array.isArray(r.highlights)) {
    throw new Error(`WorkExperience[${workIndex}].roles[${roleIndex}]: highlights must be an array`);
  }

  r.highlights.forEach((highlight: any, hIndex: number) => {
    if (!highlight.text || typeof highlight.text !== 'string') {
      throw new Error(`WorkExperience[${workIndex}].roles[${roleIndex}].highlights[${hIndex}]: missing or invalid 'text'`);
    }
    if (!Array.isArray(highlight.labels)) {
      throw new Error(`WorkExperience[${workIndex}].roles[${roleIndex}].highlights[${hIndex}]: labels must be an array`);
    }
  });

  if (!Array.isArray(r.skills)) {
    throw new Error(`WorkExperience[${workIndex}].roles[${roleIndex}]: skills must be an array`);
  }

  r.skills.forEach((skill: any, sIndex: number) => {
    if (!skill.name || typeof skill.name !== 'string') {
      throw new Error(`WorkExperience[${workIndex}].roles[${roleIndex}].skills[${sIndex}]: missing or invalid 'name'`);
    }
    if (!skill.label || typeof skill.label !== 'string') {
      throw new Error(`WorkExperience[${workIndex}].roles[${roleIndex}].skills[${sIndex}]: missing or invalid 'label'`);
    }
  });
}

function validatePublication(pub: unknown, index: number): void {
  const p = pub as any;
  const required = ['id', 'title', 'authors', 'venue', 'date', 'type', 'labels'];
  
  for (const field of required) {
    if (!p[field]) {
      throw new Error(`Publication[${index}]: missing required field '${field}'`);
    }
  }

  if (!Array.isArray(p.authors)) {
    throw new Error(`Publication[${index}]: authors must be an array`);
  }

  if (!Array.isArray(p.labels)) {
    throw new Error(`Publication[${index}]: labels must be an array`);
  }
}

