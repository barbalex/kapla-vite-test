import React from 'react';
import { useElectron } from '../use/electron';
import './About.css';

const About: React.FC = () => {
  const { versions } = useElectron();

  return (
    <>
      <h2 id="versions">
        Lib versions
      </h2>
      <div>
        <ul aria-labelledby="versions">
          {Object.keys(versions).map((lib) =>
            <li
              key={lib}
            >
              <strong>{lib}</strong>: v{versions[lib]}
            </li>,
          )}
        </ul>
      </div >
    </>
  );
};

export default About;
