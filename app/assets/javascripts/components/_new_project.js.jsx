var NewProject = React.createClass({
  handleCreate() {
    var title = this.refs.title.value;
    var notes = this.refs.notes.value;

    console.log(`Title: ${title}`);
    console.log(`Notes: ${notes}`);
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
