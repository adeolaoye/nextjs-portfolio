import React from 'react';
import { RiMailSendFill } from 'react-icons/ri'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillTelephoneFill} from "react-icons/bs";

const Contact = () => {
    return  (
        <div id='contact' className='contact'>
          <h2 className='contact-header'>Contact Me</h2>
          <form name='contact' method='POST' className='formstyle'>
            <input type='hidden' name='form-name' value='contact' />
            <div className='name-email-wrapper'>
              <p className='left'>
                <label for='name'>Your Name:</label>
                <input type='text' id='name' placeholder='David Smith' required />
              </p>
              <p className='right'>
                <label for='email'>Your Email:</label>
                <input
                  type='email'
                  id='email'
                  placeholder='janelake@aol.com'
                  required
                />
              </p>
            </div>
            <p>
              <label for='message'>Message:</label>
              <textarea
                id='message'
                rows='4'
                placeholder='Hello and good day!'
                required
              ></textarea>
            </p>
            <section>
              <button className='btn form-btn-margin' type='submit'>
                <div className='flexed'>
                  <span>send</span>
                  <RiMailSendFill className='sideIcon' />
                </div>
              </button>
              <p
                style={{
                  marginTop: '2rem',
                  fontSize: '0.8rem',
                  textAlign: 'center',
                }}
              >
                or email me{' '}
                <a className='link-email' href='mailto: adeolaoye56@gmail.com'>
                here 
                </a>
              </p>
            </section>
          </form>

          <span>Find me here:</span>
        <div className='social-icons-wrapper'>
          <section className='bio-icon-container'>
            <a
              href='https://linkedin.com/in/adeolaoye'
              rel='noreferrer'
              target='_blank'
            >
              <FaLinkedin
                className='bio-icon' 
              />
              <span className='icon-text'>
                linkedin
              </span>
            </a>
            <a
              href='https://github.com/adeolaoye'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub
                className='bio-icon' 
              />
              <span className='icon-text'>
                github
              </span>
            </a>
            <a href='tel:+44-7455026726'>
          <BsFillTelephoneFill className='bio-icon' />
          <span className='icon-text'>
                mobile
              </span>
        </a>
          </section>
        </div>
        <span>View my CV here:</span>
        <br />
        <a href='https://drive.google.com/file/d/1FCHG9Q2WRVCKilxFETruiIrmNK-mMTo-/view?usp=sharing'
          rel='noreferrer'
          target='_blank'
        >
          <button className='btn'>
            <div className='flexed btn-animate'>
              <span>view resume</span>
            </div>
          </button>
        </a>
        </div>
      );
}

export default Contact;