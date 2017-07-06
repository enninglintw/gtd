var AllTodos = React.createClass({
  handleDelete() {
    console.log('Delete button is clicked.');
  },

  render() {
    var todos = this.props.todos.map((todo) => {
      return (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.notes}</p>
          <button onClick={this.handleDelete}>Delete</button>
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
