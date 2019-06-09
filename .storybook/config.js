import { configure, setAddon } from '@storybook/react';
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(file => req(file));
  // You can require as many stories as you need.
}

configure(loadStories, module);