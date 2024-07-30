import ProteinViewer from '../components/ProteinViewer';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">3D Protein Bond Visualization</h1>
      <p className="mb-4">This is a simple 3D representation of a protein bond using spheres and a cylinder.</p>
      <div className="bg-white rounded-lg shadow-md p-4">
        <ProteinViewer />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Red and blue spheres represent atoms, and the yellow cylinder represents the bond between them.
      </p>
    </div>
  );
};

export default Index;
