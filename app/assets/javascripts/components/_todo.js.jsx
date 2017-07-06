var Todo = React.createClass({
  render() {
    return (
      <div>
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.notes}</p>
        <button onClick={this.props.handleEdit}>Edit</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
