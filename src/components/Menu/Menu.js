

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledMenu, MenuItem, StyledMenuWrapper } from './Menu.styled';
class Menu extends Component {
  static defaultProps = {
    isOpen: false,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = e => {    
    if (window.scrollY < 500) {
      const elements = document.getElementsByClassName('bm-burger-bars');
      const items = [...elements];
      items.map(item => item.style.background = '#FBB018');
    } else if (window.scrollY > 501 && window.scrollY < 1500) {
      const elements = document.getElementsByClassName('bm-burger-bars');
      const items = [...elements];
      items.map(item => item.style.background = '#FBB018');
    } else if (window.scrollY > 1501) {
      const elements = document.getElementsByClassName('bm-burger-bars');
      const items = [...elements];
      items.map(item => item.style.background = '#FBB018');
    }
  }
  

  handleMenuStyle = () => {    
    return {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '50px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#FBB018',
        // transition: 'all 280ms ease-in-out',
      },
      bmBurgerBarsHover: {
        background: '#a90000',
        // transition: 'all 280ms ease-in-out',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
        outline: 'none',
      },
      bmCross: {
        background: '#bdc3c7',
        outline: 'none',
      },
      bmMenuWrap: {
        position: 'fixed',
        overflow: 'hidden',
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        overflow: 'hidden',
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      },
      bmItem: {
        display: 'inline-block',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
  };

  render() {
    const { isOpen } = this.props;
    return (
      <StyledMenu>
        <StyledMenuWrapper isOpen={isOpen} styles={this.handleMenuStyle()}>
          <MenuItem href="#">Overview</MenuItem>
          <MenuItem href="#">Technologies</MenuItem>
          <MenuItem href="#">Experience & Projects</MenuItem>
          <MenuItem href="#">Say Hello</MenuItem>
        </StyledMenuWrapper>
      </StyledMenu>
    );
  }
}

export default Menu;
