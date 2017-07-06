var Body = React.createClass({
  getInitialState() {
    return { todos: [] }
  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/todos.json',
      (response) => { this.setState({ todos: response }) }
    );
  },

  handleCreate(todo) {
    var updatedTodos = this.state.todos.concat(todo);
    this.setState({ todos: updatedTodos })
  },

  handleDelete(id) {
    console.log(`Todo ${id} is successfully deleted by api request`);
  },

  render() {
    return (
      <div>
        <NewTodo handleCreate={this.handleCreate} />
        <AllTodos todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    )
  }
});
