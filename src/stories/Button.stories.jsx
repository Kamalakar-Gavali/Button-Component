import React from 'react';

import Button  from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//       // backgroundColor: { control: 'color' },
//   },
// };

export default{
  title:'Example/Button',
  component:Button,
  argTypes:{
    variant:{
      options:['default','outline','text'],
      control:{type:'radio'}
    },
    disableBoxShadow:{
      control:{type:'boolean'}
    },
    disabled:{
      control:{type:'boolean'}
    },
    startIcon:{
      options:['search','lock','visibility','cart','delete'],
      control:{type:'radio'}
    },
    endIcon:{
      options:['search','lock','visibility','cart','delete'],
      control:{type:'radio'}
    },
    size:{
      options:['sm','md','lg'],
      control:{type:'radio'}
    },
    color:{
      options:['default','primary','secondary','danger'],
      control:{type:'radio'}
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args={
  variant:'default',
  
  // children:'default'
};

export const Outline = Template.bind({});
Outline.args = {
  
  variant:'outline',
  // children:'default',
  
};

export const Text = Template.bind({});
Text.args={
  variant:'text',
  
}

export const DisableBoxShadow = Template.bind({});
DisableBoxShadow.args={
disableBoxShadow:true
}

export const Disabled = Template.bind({});
Disabled.args={
  disabled:true,
  label:'Disabled'
}

export const StartIcon = Template.bind({});
StartIcon.args={
  startIcon:'a'
}

export const EndIcon = Template.bind({}); 
EndIcon.args={
  endIcon:'x'
}

export const Size = Template.bind({});
Size.args={
  size:'md'
}
export const Color = Template.bind({});
Color.args={
  color:''
}

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };