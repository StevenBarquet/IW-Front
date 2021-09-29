import Router from "next/router";

export default class Index extends React.Component {
  componentDidMount = () => {
    Router.push("/home");
  };

  render() {
    return <div />;
  }
}
