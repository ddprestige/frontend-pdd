'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

const AdminPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [uploadedProducts, setUploadedProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // ✅ First check authentication
  useEffect(() => {
    const checkAuthAndFetch = async () => {
      try {
        const res = await fetch('https://api.prestigedreamdecor.in/api/auth/me', {
          credentials: 'include',
        });
        if (!res.ok) {
          router.push('https://api.prestigedreamdecor.in/auth/login');
        } else {
          await fetchProducts(); // Only fetch if authenticated
          setLoading(false);
        }
      } catch (err) {
        router.push('https://api.prestigedreamdecor.in/auth/login');
      }
    };
    checkAuthAndFetch();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
  try {
    const res = await fetch('https://api.prestigedreamdecor.in/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    if (res.ok) {
      router.push('https://api.prestigedreamdecor.in/auth/login');
    } else {
      console.error('Logout failed');
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
};


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    if (imageFile) data.append('image', imageFile);

    const url = editingProduct
      ? `https://api.prestigedreamdecor.in/api/products/update/${editingProduct._id}`
      : 'https://api.prestigedreamdecor.in/api/products/add';

    const method = editingProduct ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        body: data,
      });

      const resData = await res.json();
      if (res.ok) {
        setMessage({
          type: 'success',
          text: editingProduct ? '✅ Product updated!' : '✅ Product uploaded!',
        });
        setFormData({ name: '', description: '' });
        setImageFile(null);
        setEditingProduct(null);
        fetchProducts();
      } else {
        setMessage({ type: 'error', text: `❌ ${resData.message || 'Something went wrong'}` });
      }
    } catch (error) {
      setMessage({ type: 'error', text: `❌ ${(error as Error).message}` });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`https://api.prestigedreamdecor.in/api/products/delete/${id}`, { method: 'DELETE' });
      const result = await res.json();
      if (res.ok) {
        setMessage({ type: 'success', text: '✅ Product deleted successfully!' });
        fetchProducts();
      } else {
        setMessage({ type: 'error', text: `❌ Delete failed: ${result.message}` });
      }
    } catch (error) {
      setMessage({ type: 'error', text: `❌ ${(error as Error).message}` });
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://api.prestigedreamdecor.in/api/products/display');
      const data: Product[] = await res.json();
      if (res.ok) setUploadedProducts(data);
      else throw new Error('Failed to fetch products');
    } catch (error) {
      setMessage({ type: 'error', text: `❌ ${(error as Error).message}` });
    }
  };

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        description: editingProduct.description,
      });
    }
  }, [editingProduct]);


  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>

      <button
  onClick={handleLogout}
  className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
>
  Logout
</button>


      {/* Form */}
      <div className="mb-8 border-b pb-4">
        <h3 className="text-xl font-semibold mb-2">
          {editingProduct ? 'Edit Product' : 'Upload New Product'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required={!editingProduct}
          />
          {(imageFile || editingProduct?.image) && (
            <img
              src={imageFile ? URL.createObjectURL(imageFile) : editingProduct?.image}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2 rounded"
            />
          )}
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
          >
            {editingProduct ? 'Update Product' : 'Upload Product'}
          </button>
          {editingProduct && (
            <button
              type="button"
              onClick={() => {
                setEditingProduct(null);
                setFormData({ name: '', description: '' });
                setImageFile(null);
              }}
              className="w-full bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
            >
              Cancel Editing
            </button>
          )}
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message.text}
          </p>
        )}
      </div>

      {/* Product List */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Uploaded Products</h3>
        {uploadedProducts.length > 0 ? (
          <ul className="space-y-4">
            {uploadedProducts.map((product) => (
              <li key={product._id} className="border rounded p-4">
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-gray-600">{product.description}</p>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover mt-2 rounded"
                  />
                )}
                <div className="mt-2">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No products have been uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
