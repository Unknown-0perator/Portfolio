import './About.scss';

const About = () => {

    return (
        <section className="about">

            <div className="about__container">

                <article className="about__text">
                    <h2 className="section-heading">About</h2>
                    <p className="about__content">Hello, I’m Ahmad Akhtar, recent Computer Science graduate with a strong passion for web development, as evidenced by my successful projects and coursework. I am proactive in seeking out new challenges and taking the initiative to lead. Alongside my technical skills, I prioritize effective communication and enjoy fostering connections, showcasing my commitment to collaborative and productive environments.</p>
                </article>
                <article className="json">
                    <p className="json__line">
                        <span className="json__const">const</span> <span className="json__variable">Skills</span> = <span className="json__bracket">&#91;</span>
                    </p>
                    <p className="json__line">
                        <span className="json__index">"HTML5/CSS"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"SASS"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"JavaScript"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"ReactJS"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"NodeJS"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"Express.js"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"MySQL"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"Knex"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"Python"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"C/C++"</span>,
                    </p>
                    <p className="json__line">
                        <span className="json__index">"Java"</span>,
                    </p>

                    <p className="json__line">
                        <span className="json__bracket">&#93;</span>
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About;