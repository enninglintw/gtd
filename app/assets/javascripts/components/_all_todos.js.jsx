var AllTodos = React.createClass({
  render() {
    var todos = this.props.todos.map((todo) => {
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
