import './Project.scss';
import backIcon from '../../assests/icons/backward.svg';
import frontIcon from '../../assests/icons/forward.svg';
import recentIcon from '../../assests/icons/recent.svg';
import projectIcon from '../../assests/icons/project.svg';
import folderIcon from '../../assests/icons/folder.svg';

const Project = () => {
    return (
        <section className="project-section">
            <div className="section-heading">Projects</div>
            <div className="project">
                <div className="project__title-container">
                    <h3 className="project__title">project</h3>
                </div>
                <div className="project__toolbar-container">
                    <div className="project__toolbar">
                        <img src={backIcon} alt="" className="project__toolbar-icon" />
                        <img src={frontIcon} alt="" className="project__toolbar-icon" />
                    </div>
                </div>
                <div className="project__detail-container">
                    <div className="sidebar">
                        <ul className="sidebar__list">
                            <li className="sidebar__item"><img src={recentIcon} alt="" className="sidebar__icon" />recent</li>
                            <li className="sidebar__item sidebar__item--active"><img src={projectIcon} alt="" className="sidebar__icon" />projects</li>
                        </ul>
                    </div>
                    <div className="project__detail">
                        <ul className="project__list">
                            <li className="project__item">
                                <img src={folderIcon} alt="" className="project__icon" />
                                <p className="project__name">TaskEase</p>
                            </li>
                            <li className="project__item">
                                <img src={folderIcon} alt="" className="project__icon" />
                                <p className="project__name">PatDoc</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;