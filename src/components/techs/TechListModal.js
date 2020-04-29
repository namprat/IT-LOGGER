import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

export const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => (
              //   <li key={tech.id} className="collection-item">
              //     {tech.firstName}
              //   </li>
              <TechItem tech={tech} key={tech.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
