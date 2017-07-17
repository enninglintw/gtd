var Body = React.createClass({
  getInitialState() {
    return {
      todos: [],
      renderIn: 'Body'
    }
  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/todos.json',
      (response) => { this.setState({ todos: response }) }
    );
  },

  handleCreateTodo(todo) {
    var updatedTodos = this.state.todos.concat(todo);
    this.setState({ todos: updatedTodos })
  },

  handleDeleteTodo(id) {
    var updatedTodos = this.state.todos.filter((t) => { return t.id != id });
    this.setState({ todos: updatedTodos })
  },

  handleEditTodo(todo) {
    var updatedTodos = this.state.todos.map((t) => { return t.id == todo.id ? todo : t });
    this.setState({ todos: updatedTodos })
  },

  render() {
    switch(this.props.renderInBody) {
      case 'todos':
        return (
          <div>
            <NewTodo handleCreate={this.handleCreateTodo} />
            <AllTodos todos={this.state.todos}
                      handleEdit={this.handleEditTodo}
                      handleDelete={this.handleDeleteTodo} />
          </div>
        );
      case 'projects':
        return (
          <div>
            <NewProject handleCreate={this.props.handleCreateProject} />
            <AllProjects projects={this.props.projects}
                         handleEdit={this.props.handleEditProject}
                         handleDelete={this.props.handleDeleteProject}
                         renderIn={this.state.renderIn} />
          </div>
        );
    }
  }
});
