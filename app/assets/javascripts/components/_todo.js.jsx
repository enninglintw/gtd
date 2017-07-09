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
    var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.todo.title}/> : <h3>{this.props.todo.title}</h3>;
    var notes = this.state.editable ? <input type='text' ref='notes' defaultValue={this.props.todo.notes}/> : <p>{this.props.todo.notes}</p>;
    var editButton = this.state.editable ? <button onClick={this.handleEdit}>Save Changes</button> : <button onClick={this.handleEdit}>Edit</button>;

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
