var Project = React.createClass ({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if(this.state.editable) {
      var id      = this.props.project.id;
      var due     = this.refs.due.value;
      var title   = this.refs.title.value;
      var notes   = this.refs.notes.value;
      var project = { id: id, due: due, title: title, notes: notes };

      $.ajax({
        url: `/api/v1/projects/${id}`,
        type: 'PUT',
        data: { project: project },
        success: (project) => {
          this.props.handleEdit(project);
        }
      });
    }

    this.setState({ editable: !this.state.editable });
  },

  render() {
    var editable   = this.state.editable;
    var project    = this.props.project;
    var due        = editable ? <input type='date' ref='due' defaultValue={project.due} />     : <div>{project.due}</div>;
    var title      = editable ? <input type='text' ref='title' defaultValue={project.title} /> : <h3>{project.title}</h3>;
    var notes      = editable ? <input type='text' ref='notes' defaultValue={project.notes} /> : <p>{project.notes}</p>;
    var editButton = <button onClick={this.handleEdit}>{editable ? 'Save Changes' : 'Edit'}</button>;

    return (
      <div>
        {title}
        {notes}
        {due}
        <div>{project.focus ? '★' : '☆'}</div>
        <div>{project.state}</div>
        <div>{project.process}</div>
        {editButton}
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
