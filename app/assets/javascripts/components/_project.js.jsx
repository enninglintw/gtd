var Project = React.createClass ({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    this.setState({ editable: !this.state.editable });
  },

  render() {
    var editable   = this.state.editable;
    var project    = this.props.project;
    var due        = editable ? <input type='date' /> : <div>{project.due}</div>;
    var title      = editable ? <input type='text' /> : <h3>{project.title}</h3>;
    var notes      = editable ? <input type='text' /> : <p>{project.notes}</p>;
    var editButton = <button onClick={this.handleEdit}>{editable ? 'Save Changes' : 'Edit'}</button>;

    return (
      <div>
        <div>{project.focus ? '★' : '☆'}</div>
        <div>{project.state}</div>
        <div>{project.actions_behaviour}</div>
        {due}
        {title}
        {notes}
        {editButton}
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
