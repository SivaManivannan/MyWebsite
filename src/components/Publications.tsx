import type { Publication } from '../types/resume';
import './Publications.css';

interface PublicationsProps {
  publications: Publication[];
}

function Publications({ publications }: PublicationsProps) {
  const formatDate = (dateStr: string) => {
    const [year] = dateStr.split('-');
    return year;
  };

  const formatAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    return `${authors.slice(0, -1).join(', ')}, and ${authors[authors.length - 1]}`;
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'journal':
        return '📄';
      case 'conference':
        return '🎤';
      case 'patent':
        return '⚖️';
      case 'thesis':
        return '🎓';
      default:
        return '📚';
    }
  };

  return (
    <section className="publications-section">
      <div className="publications-list">
        {publications.map(pub => (
          <div key={pub.id} className="publication-item">
            <div className="publication-header">
              <span className="publication-type" title={pub.type}>
                {getTypeIcon(pub.type)}
              </span>
              <div className="publication-content">
                <div className="publication-citation">
                  <span className="citation-title">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        "{pub.title},"
                        <svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          className="external-link-icon"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : (
                      `"${pub.title}",`
                    )}
                  </span>
                  {pub.venue && (
                    <span className="citation-venue"> <em>{pub.venue}</em>,</span>
                  )}
                  <span className="citation-date"> {formatDate(pub.date)}.</span>
                  <span className="citation-authors"> {formatAuthors(pub.authors)}.</span>
                </div>
                
                {pub.description && (
                  <p className="publication-description">{pub.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications;

