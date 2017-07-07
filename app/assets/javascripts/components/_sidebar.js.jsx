var Sidebar = React.createClass({
  render() {
    return (
      <div>
        <AllProjects projects={this.props.projects} />
      </div>
    )
  }
});
