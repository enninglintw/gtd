var NewTodo = React.createClass({
  handleCreate() {
    var title = this.refs.title.value;
    var state = 'inbox';
    var notes = this.refs.notes.value;

    $.ajax({
      url: '/api/v1/todos',
      type: 'POST',
      data: { todo: { title: title, state: state, notes: notes } },
      success: (response) => {
        console.log('Todo was successfully created.', response);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='title' placeholder='New todo' />
        <input ref='notes' placeholder='Enter notes' />
        <button onClick={this.handleCreate}>Submit</button>
      </div>
    )
  }
});
