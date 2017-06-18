import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';
import Navbar from './Navbar';

expect.addSnapshotSerializer(serializer);

describe('Components', () => {
    const navbar = shallow(<Navbar />);
    describe('Navbar', () => {
        it('should render', () => {
            expect(navbar.find('nav').hasClass('navbar')).toBe(true);
        });
        it('Should contain brand text', () => {
            expect(navbar.findWhere(n => n.is('.navbar-brand')).text()).toBe(
                'Catalog App'
            );
        });
        it('Should match snapshot', () => {
            expect(navbar).toMatchSnapshot();
        });
    });
});
