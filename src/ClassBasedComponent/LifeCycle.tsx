import React from "react";

class Header extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props: { favcol: any }, state: any) {
    return { favoritecolor: props.favcol };
  }
  render() {
    return <h1>My Favorite Color is red</h1>;
  }
}

export default Header;
