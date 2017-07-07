var Project = React.createClass ({
  render() {
    return (
      <div>
        <div>{this.props.project.focus ? '★' : '☆'}</div>
        <div>{this.props.project.state}</div>
        <div>{this.props.project.actions_behaviour}</div>
        <div>{this.props.project.due}</div>
        <h3>{this.props.project.title}</h3>
        <p>{this.props.project.notes}</p>
        <button onClick={this.props.handleEdit}>Edit</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
