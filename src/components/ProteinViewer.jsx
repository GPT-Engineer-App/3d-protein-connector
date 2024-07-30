import React, { useEffect, useRef } from 'react';
import { Viewer } from 'react-3dmol';

const ProteinViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = viewerRef.current;
      viewer.addSphere({ center: {x:0, y:0, z:0}, radius: 10.0, color: 'red' });
      viewer.addSphere({ center: {x:10, y:0, z:0}, radius: 10.0, color: 'blue' });
      viewer.addCylinder({ start:{x:0,y:0,z:0}, end:{x:10,y:0,z:0}, radius:1, color:'yellow'});
      viewer.zoomTo();
      viewer.render();
    }
  }, []);

  return (
    <div className="w-full h-[400px]">
      <Viewer ref={viewerRef} backgroundColor="white" />
    </div>
  );
};

export default ProteinViewer;
