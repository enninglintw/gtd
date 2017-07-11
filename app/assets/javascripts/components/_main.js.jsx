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

  render() {
    return (
      <div>
        <Header />
        <Sidebar projects={this.state.projects}
                 renderInBody={this.state.renderInBody} />
        <Body projects={this.state.projects}
              renderInBody={this.state.renderInBody} />
      </div>
    )
  }
});
