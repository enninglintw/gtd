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

  render() {
    return (
      <div>
        <NewTodo />
        <AllTodos todos={this.state.todos} />
      </div>
    )
  }
});
