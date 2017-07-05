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
    console.log(todo);
  },

  render() {
    return (
      <div>
        <NewTodo handleCreate={this.handleCreate} />
        <AllTodos todos={this.state.todos} />
      </div>
    )
  }
});
