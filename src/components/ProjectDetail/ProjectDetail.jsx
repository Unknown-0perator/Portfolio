import './ProjectDetail.scss';
import { convertObjToArray } from '../../utilities/utilities';
import closeIcon from '../../assests/icons/close.svg';
import { Link } from 'react-router-dom';

const ProjectDetail = ({ projectDetails, handleClose }) => {
    return (
        <div className="description">
            <div className="description__toolbar-container">
                <h3 className="description__project-name">{projectDetails.name}</h3>
                <img onClick={handleClose} src={closeIcon} alt="" className="description__icon" />
            </div>
            <div className="description__detail-container">
                <div className="description__logo-container">
                    <img src={`${process.env.PUBLIC_URL}${projectDetails.logo}`} alt="" className="description__logo" />
                </div>
                <h2 className="description__name">{projectDetails.name}</h2>
                <h3 className="description__title">Introduction</h3>
                <p className="description__detail">
                    {projectDetails.introduction}
                </p>
                <h3 className="description__title">Features</h3>
                <ul className="description__list">
                    {projectDetails.features.map((feature, index) => {
                        return (
                            <li className="description__item"><h4 className="description__sub-title">{index + 1}. {feature}</h4></li>
                        )
                    })}
                </ul>
                <h3 className="description__title">Technologies Used</h3>
                <ul className="description__list">
                    {
                        convertObjToArray(projectDetails.technologies).map(tech => {
                            return (
                                <li className="description__item">
                                    <h4 className="description__sub-title">{tech.key}: </h4>
                                    <p className="description__detail">{tech.value}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <h3 className="description__title">Repositories</h3>
                <ul className="description__list">
                    {convertObjToArray(projectDetails.repo).map(repo => {
                        return (
                            <li className="description__item">
                                <h4 className="description__sub-title">{repo.key}:</h4>
                                <Link className="description__link">{repo.value}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProjectDetail;