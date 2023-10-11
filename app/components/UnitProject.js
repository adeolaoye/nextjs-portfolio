import { BsArrowRight } from 'react-icons/bs';

const UnitProject = ({ id, title, src, url, gitUrl }) => {
  return (
    
      <div className='unit-project-card'>
        <h2
          style={{
            textAlign: 'left',
            fontWeight: 900,
            fontSize: '1.1rem',
          }}
        >
          {title}
        </h2>
        <img
          style={{
            display: 'block',
            width: '260.000px',
            height: '146.178px',
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%)',
          }}
          src={src}
          alt={title}
        />
        <div className='demo-git-wrapper'>
            <div className='live-tab'>
                <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                >
                    Live Demo
                </a>
            </div>
            <div className='github-tab'>
                <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href={gitUrl}
                    target='_blank'
                    rel='noreferrer'
                >
                    GitHub Repo
                </a>
            </div>
        </div>
      </div>
    
  );
};

export default UnitProject;
