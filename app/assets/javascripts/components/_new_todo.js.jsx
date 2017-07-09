var NewTodo = React.createClass({
  handleCreate() {
    var title = this.refs.title.value;
    var state = 'inbox';
    var notes = this.refs.notes.value;

    $.ajax({
      url: '/api/v1/todos',
      type: 'POST',
      data: { todo: { title: title, state: state, notes: notes } },
      success: (todo) => {
        this.props.handleCreate(todo);
      }
    });
  },

  render() {
    return (
      <div>
        <h2>Create new todo</h2>
        <input ref='title' placeholder='New todo' />
        <input ref='notes' placeholder='Enter notes' />
        <button onClick={this.handleCreate}>Submit</button>
      </div>
    )
  }
});
