import React from "react";
import { connect } from "react-redux";
import { featchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.featchStream(id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { featchStream, editStream })(
  StreamEdit
);
