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
          <Project project={project}
                   handleDelete={this.handleDelete.bind(this, project.id)} />
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
