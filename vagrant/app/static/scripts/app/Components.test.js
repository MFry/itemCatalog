import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';
import Navbar from './Navbar';
import Header from './Header';

expect.addSnapshotSerializer(serializer);

describe('Components', () => {
    describe('Navbar', () => {
        const navbar = shallow(<Navbar />);
        it('Should render', () => {
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
    describe('Header', () => {
        const header = shallow(<Header />);
        it('Should render', () => {
            expect(header.find('.page-header').type('div')).toBe('div');
        });
        it('Should contain Catalog text', () => {
            expect(header.findWhere(n => n.is('.col-md-4')).text()).toBe(
                'Catalog App'
            );
        });
        it('Should match snapshot', () => {
            expect(header).toMatchSnapshot();
        });
    });
});
