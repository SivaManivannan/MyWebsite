import type { Education as EducationType } from '../types/resume';
import './Education.css';

interface EducationProps {
  education: EducationType[];
}

function Education({ education }: EducationProps) {
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className="education-section">
      <div className="education-list">
        {education.map(edu => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <div className="education-main">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-field">{edu.field}</p>
              </div>
              <div className="education-meta">
                <span className="education-dates">
                  {formatDate(edu.fromDate)} - {formatDate(edu.toDate)}
                </span>
                <span className="education-location">{edu.location}</span>
              </div>
            </div>

            {edu.description && (
              <p className="education-description">{edu.description}</p>
            )}

            {edu.learnings && edu.learnings.length > 0 && (
              <div className="learnings">
                <h5>Learnings:</h5>
                <ul className="learnings-list">
                  {edu.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

