var Sidebar = React.createClass({
  getInitialState() {
    return { renderIn: 'Sidebar' }
  },

  render() {
    return (
      <div>
        <AllProjects projects={this.props.projects}
                     renderIn={this.state.renderIn} />
      </div>
    )
  }
});
