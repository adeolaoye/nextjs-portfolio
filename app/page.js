import React from 'react';
import Skills from './components/Skills';

const page = () => {
    return (
<section className='bio-wrapper' style={{backgroundColor: '#2d3540'}} id='bio'>
<div className='main-bio'>
    <section>
        <h1 className='main-heading'>Hello!</h1> <span className='main-span'>I'm <strong>Ade Olaoye</strong></span>
    </section>
</div>
<Skills />
<div className='greeting'><h4>More About Me</h4></div>
<p className='bio-para'>Hi there! My pseudo-name is olaDev and I have passion for coding.</p>
<p className='bio-para'>
I am a newbie in coding but with dedication and commitment to learning, I am growing fast and at a geometric rate.
I am an ex-investment banker and currently an estate developer. I ventured into web development as an act of passion for tech and website development and since then I have found it quite interesting as two days are never the same.</p>
<p className='bio-para'>I studied different programming languages at the University of Birmingham following my earlier degrees in Banking & Finance. It is worthy to mention that I found Web Engineering so empowering. I am now working as a Software developer with skills in FrontEnd Web development. I have skills in HTML, CSS, JavaScript, jQuery, Bootstraps, Node.js, Reacts and many more and these has equipped me to work and deliver on a variety of development projects.</p>
<p className='bio-para'>As a developer, given my background in investment banking, I have a good knowledge of service users requirements both in the public and private sectors that can enhance the delivery of a perfect website. I am a team player, a visioner who is keen to work collaboratively, not only to achieve organisational goals/objectives but also add value to the bottom-line.</p> 
<p className='bio-para'>I work remotely as a freelancer in FrontEnd Web Development but could also take on permanent or consulting role in your establishment with a view to making your system/website more vibrant, agile and dynamic to meet your clients or customers need and by extension your profit and social responsibility goals
 Please feel free to hit me up via the contact below.
</p>
</section>
)
}


export default page;