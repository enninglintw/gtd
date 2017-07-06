var Todo = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if(this.state.editable) {
      var title = this.refs.title.value;
      var notes = this.refs.notes.value;
      console.log('In edit mode');
      console.log(this.state.editable);
      console.log(title);
      console.log(notes);
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
