var AllProjects = React.createClass({
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/projects/${id}`,
      type: 'DELETE',
      success:() => {
        this.props.handleDelete(id);
      }
    });
  },

  render() {
    var projects = this.props.projects.map((project) => {
      return (
        <div key={project.id}>
          <div>{project.focus ? '★' : '☆'}</div>
          <div>{project.state}</div>
          <div>{project.actions_behaviour}</div>
          <div>{project.due}</div>
          <h3>{project.title}</h3>
          <p>{project.notes}</p>
          <button onClick={this.handleDelete.bind(this, project.id)}>Delete</button>
        </div>
      )
    });

    return (
      <div>
        <h2>Projects</h2>
        {projects}
      </div>
    )
  }
});
