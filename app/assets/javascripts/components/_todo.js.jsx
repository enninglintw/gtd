var Todo = React.createClass({
  handleEdit() {
    console.log(`Edit button of Todo ${this.props.todo.id} is clicked.`);
  },

  render() {
    return (
      <div>
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.notes}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
