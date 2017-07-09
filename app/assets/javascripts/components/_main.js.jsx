var Main = React.createClass({
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
        <Header />
        <Body projects={this.state.projects} />
      </div>
    )
  }
});
