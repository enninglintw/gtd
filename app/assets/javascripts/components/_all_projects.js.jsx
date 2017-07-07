var AllProjects = React.createClass({
  getInitialState() {
    return { projects: [] }
  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/projects.json',
      (response) => { this.setState({ projects: response }) }
    );
  },

  render() {
    var projects = this.state.projects.map((project) => {
      return (
        <div key={project.id}>
          <div>{project.focus ? '★' : '☆'}</div>
          <div>{project.state}</div>
          <div>{project.actions_behaviour}</div>
          <div>{project.due}</div>
          <h3>{project.title}</h3>
          <p>{project.notes}</p>
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
