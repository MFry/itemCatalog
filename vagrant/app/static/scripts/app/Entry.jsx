import React from 'react';

const Entry = ({ name, key }) => {
    return (
        <div key={key} className="item-list">
            {name}
        </div>
    );
};
export default Entry;
