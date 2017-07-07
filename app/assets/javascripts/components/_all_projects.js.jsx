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
    return (
      <div>
        <h2>Projects</h2>
      </div>
    )
  }
});
