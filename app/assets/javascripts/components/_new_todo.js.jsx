var NewTodo = React.createClass({
  handleCreate() {
    var title = this.refs.title.value;
    var notes = this.refs.notes.value;

    console.log('The title value is ' + title);
    console.log('The notes value is ' + notes);
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
