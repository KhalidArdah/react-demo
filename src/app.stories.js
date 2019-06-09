import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('NavBar', module)
  .addWithJSX('with text', () => (
    <Button>Hello Button</Button>
  ))
  .addWithJSX('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )); 