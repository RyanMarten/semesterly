import React from 'react';
import Modal from 'boron/DropModal';
import SortMenuContainer from './containers/sort_menu_container.jsx'

export class PreferenceModal extends React.Component {
  componentDidUpdate(nextProps) {
    if (this.props.isVisible) {
        this.refs.modal.show();
    }
  }
    render() {
        let modalHeader =
            <div id="modal-content">
                <div id="modal-header">
                    <h1>Timetable Preferences</h1>
                </div>
            </div>
        let modalStyle = {
            width: '100%',
        };
        return (
            <Modal ref="modal"
                   className="pref-modal"
                   modalStyle={modalStyle}
                   onHide={this.props.togglePreferenceModal}>
                {modalHeader}
                <div className="conflict-row">
                    <div style={{ marginRight: 'auto', marginLeft: '15%' }}>
                        <p style={{ margin: 0 }}>Conflicts: </p>
                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: '15%'}}>
                        <label className="switch switch-slide">
                           <input ref="share_sections" className="switch-input" type="checkbox" defaultChecked={false} onChange={this.props.toggleConflicts} />
                           <span className="switch-label" data-on="Yes" data-off="No"></span>
                           <span className="switch-handle"></span>
                       </label>
                    </div>
                </div>
                <hr style={{ marginTop: 0, width: '80%' }}/>
                <SortMenuContainer />
                <div className="preference-footer">
                    <button className="btn btn-primary"
                            style={{ marginLeft: 'auto' }}
                            onClick={this.props.togglePreferenceModal}>
                        Cancel
                    </button>
                    <button className="btn btn-primary"
                            style={{ marginLeft: '5px', marginRight: '10%' }}
                            onClick={this.props.applyPreferences}>
                        Apply
                    </button>
                </div>
            </Modal>
        );
    }
}
