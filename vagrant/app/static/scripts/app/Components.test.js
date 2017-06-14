import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Components', () => {
    describe('Navbar', () => {
        it('should render', () => {
            const navbar = shallow(<Navbar/>);
            expect(navbar.find('Navbar').hasClass('navbar')).toBe(true);
        });

    });
});

