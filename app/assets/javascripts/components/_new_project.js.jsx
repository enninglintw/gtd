var NewProject = React.createClass({
  handleCreate() {
    var title = this.refs.title.value;
    var state = 'active';
    var actions_behaviour = 'parallel';
    var notes = this.refs.notes.value;

    $.ajax({
      url: '/api/v1/projects',
      type: 'POST',
      data: { project: { title: title, state: state, actions_behaviour: actions_behaviour, notes: notes } },
      success: (response) => {
        console.log('Project was successfully created.');
        console.log(response);
      }
    });
  },

  render() {
    return (
      <div>
        <h2>Create new project</h2>
        <input ref='title' placeholder='New project'></input>
        <input ref='notes' placeholder='Enter notes'></input>
        <button onClick={this.handleCreate}>Submit</button>
      </div>
    )
  }
});
