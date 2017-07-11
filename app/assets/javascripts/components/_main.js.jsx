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

  renderProjects() {
    this.setState({ renderInBody: 'projects' })
  },

  render() {
    return (
      <div>
        <Header />
        <Sidebar projects={this.state.projects}
                 renderInBody={this.state.renderInBody}
                 renderProjects={this.renderProjects} />
        <Body projects={this.state.projects}
              renderInBody={this.state.renderInBody} />
      </div>
    )
  }
});
