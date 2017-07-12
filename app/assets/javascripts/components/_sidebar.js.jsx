var Sidebar = React.createClass({
  getInitialState() {
    return { renderIn: 'Sidebar' }
  },

  render() {
    return (
      <div>
        <TodoTypes />
        <AllProjects projects={this.props.projects}
                     renderIn={this.state.renderIn}
                     renderInBody={this.props.renderInBody}
                     renderProjects={this.props.renderProjects} />
      </div>
    )
  }
});
