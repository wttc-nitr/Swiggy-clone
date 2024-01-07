import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // after first render this function is called, we can do e.g API call

    /**
     * creating a mess:
     * 
     * this.timer = setInterval(() => {
     *  console.log('hi');
     * }, 1000);
     */
    console.log('hi from comDidMnt');
  }

  componentDidUpdate() {
    // after subsequent renders, this function is invoked
    // we should not make api call here because api call will be made after each render
    console.log('hi from comDidUpd');
  }

  componentWillUnmount() {
    // this function is invoked just before unmounting the component (component disappears from the UI)
    // * we need to clean any mess here before moving to another component.

    /**
     * cleaning the mess made in componentDidMount:
     * 
     * clearInterval(this.timer);
     * 
     */

    console.log('hi from comWillUnmnt');
  }

  render() {
    const { name, location } = this.props;
    const { counter } = this.state;

    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Counter class: {counter}</h2>
        <button
          onClick={() => {
            this.setState({
              counter: counter + 1,
            });
          }}
        >
          Increase-counter
        </button>
        <h2>{name}</h2>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
