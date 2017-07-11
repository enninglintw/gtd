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

  handleEdit(project) {
    this.props.handleEdit(project);
  },

  renderProjects() {
    console.log("Projects is clicked");
  },

  render() {
    var header = this.props.renderIn == 'Sidebar' ? <h2 onClick={this.renderProjects}>Projects</h2> : <h2>Projects</h2>
    var projects = this.props.projects.map((project) => {
      return (
        <div key={project.id}>
          <Project project={project}
                   handleEdit={this.handleEdit}
                   handleDelete={this.handleDelete.bind(this, project.id)}
                   renderIn={this.props.renderIn} />
        </div>
      )
    });

    return (
      <div>
        {header}
        {projects}
      </div>
    )
  }
});
