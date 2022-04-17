import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div style={{height:'530px'}}>
            <DropdownButton className='d-flex justify-content-center my-3' id="dropdown-item-button" title="What is differences between this and that">
        <Dropdown.ItemText>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni ratione corrupti expedita suscipit deserunt aliquid voluptatem, possimus quae vitae sunt explicabo accusamus iste corporis voluptates maiores ducimus nemo molestias!</p>
        </Dropdown.ItemText>
      </DropdownButton>
            <DropdownButton className='d-flex justify-content-center my-3' id="dropdown-item-button" title="What is differences between this and that">
        <Dropdown.ItemText>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni ratione corrupti expedita suscipit deserunt aliquid voluptatem, possimus quae vitae sunt explicabo accusamus iste corporis voluptates maiores ducimus nemo molestias!</p>
        </Dropdown.ItemText>
      </DropdownButton>
            <DropdownButton className='d-flex justify-content-center my-3' id="dropdown-item-button" title="What is differences between this and that">
        <Dropdown.ItemText>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni ratione corrupti expedita suscipit deserunt aliquid voluptatem, possimus quae vitae sunt explicabo accusamus iste corporis voluptates maiores ducimus nemo molestias!</p>
        </Dropdown.ItemText>
      </DropdownButton>
        </div>
    );
};

export default Blogs;