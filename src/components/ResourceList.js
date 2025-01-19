// ResourceList.js
import React from 'react';
import ResourceCard from './ResourceCard';

const ResourceList = ({ resourcesList }) => {
  return (
    <ul className='flex flex-wrap'>
      {resourcesList.map((resource, index) => (
       <ResourceCard resource={resource}  index={index}/>
      ))}
    </ul>
  );
};

export default ResourceList;
