var TodoTypes = React.createClass({
  renderInbox() {
    console.log('Inbox is clicked');
  },

  render() {
    return (
      <div>
        <h2>COLLECT</h2>
        <h3 onClick={this.renderInbox}>Inbox</h3>
        <h2>ACTIONS</h2>
        <h3>Next</h3>
        <h3>Later</h3>
        <h3>Waiting</h3>
        <h3>Scheduled</h3>
        <h3>Someday</h3>
      </div>
    )
  }
});
