import React from 'react';
import Content from './Content';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';


describe('Testing basic <Content /> functionality', () => {
   it('should render without throwing an error', ()=> {
      expect(shallow(<Content />).prop('className')).toEqual("row");
   });
});

test('Content left panel renders', () => {
   const left_panel = renderer.create(
       <Content />
   );
    expect(left_panel).toMatchSnapshot();
});
