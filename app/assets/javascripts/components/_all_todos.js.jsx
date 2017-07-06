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
          <Todo todo={todo}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete.bind(this, todo.id)} />
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
