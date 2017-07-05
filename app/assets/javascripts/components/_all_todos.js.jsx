var AllTodos = React.createClass({
  getInitialState() {
    return { todos: [] }
  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/todos.json',
      (response) => { this.setState({ todos: response }) }
    );
  },

  render() {
    return (
      <div>
        <h3>This is AllTodos!</h3>
      </div>
    )
  }
});
