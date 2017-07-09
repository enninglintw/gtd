var NewProject = React.createClass({
  handleCreate() {
    var title = this.refs.title.value;
    var state = 'active';
    var process = 'parallel';
    var notes = this.refs.notes.value;

    $.ajax({
      url: '/api/v1/projects',
      type: 'POST',
      data: { project: { title: title, state: state, process: process, notes: notes } },
      success: (project) => {
        this.props.handleCreate(project);
      }
    });
  },

  render() {
    return (
      <div>
        <h2>Create new project</h2>
        <input ref='title' placeholder='New project' />
        <input ref='notes' placeholder='Enter notes' />
        <button onClick={this.handleCreate}>Submit</button>
      </div>
    )
  }
});
