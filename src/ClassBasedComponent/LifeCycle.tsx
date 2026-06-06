import React from "react";

type HeaderProps = {
  favcol?: string;
};

type HeaderState = {
  favoritecolor: string;
};

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  static getDerivedStateFromProps(props: HeaderProps) {
    return { favoritecolor: props.favcol ?? "red" };
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

export default Header;
