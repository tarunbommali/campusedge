import React from 'react';
import ResourceCard from './ResourceCard';

const ResourceList = ({ resourcesList, onReset }) => {
  return (
    <>
      {resourcesList.length ? (
        <ul className="flex flex-wrap">
          {resourcesList.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </ul>
      ) : (
        <h1 className="text-xl text-[#1f1f1f]">
          No Course Added Yet,
          <button onClick={onReset} className="ml-2 text-red-500">
            Reset Now.
          </button>
        </h1>
      )}
    </>
  );
};

export default ResourceList;
