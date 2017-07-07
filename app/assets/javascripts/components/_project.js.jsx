var Project = React.createClass ({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    this.setState({ editable: !this.state.editable });
    console.log(this.state.editable);
  },

  render() {
    return (
      <div>
        <div>{this.props.project.focus ? '★' : '☆'}</div>
        <div>{this.props.project.state}</div>
        <div>{this.props.project.actions_behaviour}</div>
        <div>{this.props.project.due}</div>
        <h3>{this.props.project.title}</h3>
        <p>{this.props.project.notes}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
