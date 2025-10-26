import type { Skill, Language } from '../types/resume';
import './Skills.css';

interface SkillsProps {
  skills: (Skill & { fromDate: string; toDate?: string })[];
  languages?: Language[];
}

function Skills({ skills, languages }: SkillsProps) {
  // Group skills by label
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.label]) {
      acc[skill.label] = [];
    }
    acc[skill.label].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="skills-sidebar">
      <section className="skills-section">
        <h2 className="sidebar-title">Skills</h2>
        
        <div className="skills-list">
          {Object.entries(groupedSkills).map(([label, labelSkills]) => (
            <div key={label} className="skill-category">
              <h3 className="skill-category-label">{label}</h3>
              <div className="skill-items">
                {labelSkills.map(skill => (
                  <span key={skill.name} className="skill-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {languages && languages.length > 0 && (
        <section className="languages-section">
          <h2 className="sidebar-title">Languages</h2>
          <div className="languages-list">
            {languages.map(lang => (
              <div key={lang.name} className="language-item">
                <span className="language-name">{lang.name}</span>
                <span className="language-proficiency">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Skills;
