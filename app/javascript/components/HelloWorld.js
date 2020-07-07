import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    function HomeIcon(props) {
      return (
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      );
    }
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <Button variant="contained" color="primary">
          Hello World
          <HomeIcon />
        </Button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
