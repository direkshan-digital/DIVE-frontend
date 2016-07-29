import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import styles from './ProjectButton.sass';

export default class ProjectButton extends Component {
  render() {
    const { project, className, format } = this.props;
    const { id, title, description, numDatasets, includedDatasets, numSpecs, numDocuments, creationDate, updateDate } = project;

    return (
      <a href={ `/projects/${ id }/datasets` } className={ styles.projectButton }>
        <div className={ styles.projectTop }>
          <div className={ styles.projectTitle }>{ title }</div>
        </div>
        <div className={ styles.projectMiddle }>
          <div className={ styles.projectLeft }>
            { (description !== 'Project Description') &&
              <div className={ styles.projectDescription }>{ description }</div>
            }
            <div className={ styles.metadata }>
              <div className={ styles.item }>
                <span className={ styles.label }>Datasets</span>
                <span className={ styles.value }>{ numDatasets }</span>
              </div>
              <div className={ styles.item }>
                <span className={ styles.label }>Visualizations</span>
                <span className={ styles.value }>{ numSpecs }</span>
              </div>
              <div className={ styles.item }>
                <span className={ styles.label }>Documents</span>
                <span className={ styles.value }>{ numDocuments }</span>
              </div>
            </div>
          </div>
          <div className={ styles.projectRight }>
            <div className={ styles.item }>
              <span className={ styles.label }>Created</span>
              <span className={ styles.value }>{ moment(creationDate).format('LLL') }</span>
            </div>
            <div className={ styles.item }>
              <span className={ styles.label }>Last Updated</span>
              <span className={ styles.value }>{ moment(updateDate).format('LLL') }</span>
            </div>
          </div>
        </div>
        { (numDatasets > 0) &&
        <div className={ styles.projectBottom }>
          <div className={ styles.item }>
            <span className={ styles.label }>Datasets</span>
            <span className={ styles.values }>
              { includedDatasets.map((dataset) =>
                <div className={ styles.projectUpdateDate } key={ `project-dataset-${ dataset.id }`}>{ dataset.title }</div>
              )}
            </span>
          </div>
        </div>
        }
      </a>
    )
  }
}

ProjectButton.propTypes = {
  className: PropTypes.string,
  format: PropTypes.string,
  project: PropTypes.object.isRequired,
}

ProjectButton.defaultProps = {
  format: 'list'
}
