import UnitProject from '../components/UnitProject';
import projectLinks from '../../projectLinks.json';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
    
      <h2 className='projects-header'>Projects</h2>
      <div
        style={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '2rem 0',
        }}
      >
        {projectLinks.map((project) => {
          return <UnitProject key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
