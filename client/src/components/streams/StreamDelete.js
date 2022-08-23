import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { featchStream } from "../../actions";
import { Link } from "react-router-dom";
import { deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.featchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className='ui button negative'
          onClick={() => {
            this.props.deleteStream(id);
          }}
        >
          Delete
        </button>
        <Link to={"/"} className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { featchStream, deleteStream })(
  StreamDelete
);
