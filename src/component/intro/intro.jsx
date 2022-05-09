import React, { useContext } from 'react';
import './intro.css';
import mee from '../../img/mee.png';
import thumbup from '../../img/thumbup.png';
import FloatinDiv from '../floatingdiv/foatingdiv';
import { themeContext } from '../../context';
import { motion } from 'framer-motion';
import Resume from './resume.pdf';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Bonjour! Je suis </span>
          <span> BEL-YMAM Mohamed </span>
          <span>
            Un jeune développeur junior je suis passionné par le domaine de la
            programmation j'ai commencé ma carrière à la 3w Academy, je
            maitrise plusieurs langage tell que le html, Css, Js et son
            petit-fils React j'espère que je peux vous aider dans quelque chose
            !
          </span>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={mee} alt="" id="img" />
        {/* animation */}
        <motion.div
          initial={{ left: '10rem', top: '12rem' }}
          whileInView={{ left: '-2rem' }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Junior Web" text2="Developper" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
