var AllTodos = React.createClass({
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/todos/${id}`,
      type: 'DELETE',
      success:() => {
        this.props.handleDelete(id);
      }
    });
  },

  handleEdit() {
    console.log('Edit button is clicked.');
  },

  render() {
    var todos = this.props.todos.map((todo) => {
      return (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.notes}</p>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete.bind(this, todo.id)}>Delete</button>
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
