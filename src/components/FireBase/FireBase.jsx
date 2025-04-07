import React, { useEffect, useState } from "react";
import { db } from "../FireBase/Firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const FireBase = () => {
  const colRef = collection(db, "posts");

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [postId, setPostId] = useState('');
  const [message, setMessage] = useState('');

  // Lấy dữ liệu ban đầu
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("All posts:", posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Thêm bài viết
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
    })
      .then(() => {
        setMessage("✅ Thêm bài viết thành công!");
        setTitle('');
        setAuthor('');
      })
      .catch((err) => {
        setMessage("❌ Thêm thất bại: " + err.message);
      });
  };

  // Xóa bài viết
  const handleRemovePost = async (e) => {
    e.preventDefault();
    try {
      const colRefDelete = doc(db, "posts", postId);
      await deleteDoc(colRefDelete);
      setMessage("🗑️ Xóa bài viết thành công!");
      setPostId('');
    } catch (err) {
      setMessage("❌ Xóa thất bại: " + err.message);
    }
  };

  return (
    <div className="p-5">
      {/* Hiển thị thông báo */}
      {message && (
        <div className="w-full max-w-2xl mx-auto mb-5 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}

      {/* Form thêm bài viết */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            value={title}
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={author}
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={e => setAuthor(e.target.value)}
          />
          <button type="submit" className="p-5 bg-blue-500 text-white text-sm font-medium rounded-lg w-full">
            Submit
          </button>
        </form>
      </div>

      {/* Form xóa bài viết */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            value={postId}
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter post ID to delete"
            name="postId"
            onChange={e => setPostId(e.target.value)}
          />
          <button type="submit" className="p-5 bg-red-500 text-white text-sm font-medium rounded-lg w-full">
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default FireBase;
