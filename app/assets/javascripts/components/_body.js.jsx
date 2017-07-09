var Body = React.createClass({
  getInitialState() {
    return { todos: [], projects: [] }
  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/todos.json',
      (response) => { this.setState({ todos: response }) }
    );
    $.getJSON(
      '/api/v1/projects.json',
      (response) => { this.setState({ projects: response }) }
    );
  },

  handleCreate(todo) {
    var updatedTodos = this.state.todos.concat(todo);
    this.setState({ todos: updatedTodos })
  },

  handleDelete(id) {
    var updatedTodos = this.state.todos.filter((t) => { return t.id != id });
    this.setState({ todos: updatedTodos })
  },

  handleEdit(todo) {
    var updatedTodos = this.state.todos.map((t) => { return t.id == todo.id ? todo : t })
    this.setState({ todos: updatedTodos })
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

  render() {
    return (
      <div>
        <NewTodo handleCreate={this.handleCreate} />
        <AllTodos todos={this.state.todos}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete} />
        <NewProject handleCreate={this.handleCreateProject} />
        <AllProjects projects={this.state.projects}
                     handleEdit={this.handleEditProject}
                     handleDelete={this.handleDeleteProject} />
      </div>
    )
  }
});
