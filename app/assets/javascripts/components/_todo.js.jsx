var Todo = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if(this.state.editable) {
      var id    = this.props.todo.id;
      var title = this.refs.title.value;
      var notes = this.refs.notes.value;
      var todo  = { id: id, title: title, notes: notes };

      $.ajax({
        url: `/api/v1/todos/${id}`,
        type: 'PUT',
        data: { todo: todo },
        success: (todo) => {
          this.props.handleEdit(todo);
        }
      });
    }

    this.setState({ editable: !this.state.editable });
  },

  render() {
    var editable   = this.state.editable;
    var todo       = this.props.todo;
    var title      = editable ? <input type='text' ref='title' defaultValue={todo.title} /> : <h3>{todo.title}</h3>;
    var notes      = editable ? <input type='text' ref='notes' defaultValue={todo.notes} /> : <p>{todo.notes}</p>;
    var editButton = <button onClick={this.handleEdit}>{editable ? 'Save Changes' : 'Edit'}</button>;

    return (
      <div>
        {title}
        {notes}
        {editButton}
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
