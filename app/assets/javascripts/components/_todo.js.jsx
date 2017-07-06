var Todo = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    this.setState({ editable: !this.state.editable });
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
