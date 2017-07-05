var AllTodos = React.createClass({
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
    var todos = this.state.todos.map((todo) => {
      return (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.notes}</p>
        </div>
      )
    });

    return (
      <div>
        {todos}
      </div>
    )
  }
});
