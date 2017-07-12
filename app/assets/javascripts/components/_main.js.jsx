var Main = React.createClass({
  getInitialState() {
    return {
      projects: [],
      renderInBody: 'todos'
    }
  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/projects.json',
      (response) => { this.setState({ projects: response }) }
    );
  },

  handleCreateProject(project) {
    var updatedProjects = this.state.projects.concat(project);
    this.setState({ projects: updatedProjects })
  },

  handleDeleteProject(id) {
    var updatedProjects = this.state.projects.filter((p) => { return p.id != id });
    this.setState({ projects: updatedProjects })
  },

  handleEditProject(project) {
    var updatedProjects = this.state.projects.map((p) => { return p.id == project.id ? project : p });
    this.setState({ projects: updatedProjects })
  },

  renderProjects() {
    this.setState({ renderInBody: 'projects' })
  },

  renderInbox() {
    console.log('Inbox is clicked');
  },

  render() {
    return (
      <div>
        <Header />
        <Sidebar projects={this.state.projects}
                 renderInBody={this.state.renderInBody}
                 renderProjects={this.renderProjects}
                 renderInbox={this.renderInbox} />
        <Body projects={this.state.projects}
              handleCreateProject={this.handleCreateProject}
              handleDeleteProject={this.handleDeleteProject}
              handleEditProject={this.handleEditProject}
              renderInBody={this.state.renderInBody} />
      </div>
    )
  }
});
