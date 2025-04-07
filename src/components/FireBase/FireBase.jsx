import React, { useEffect, useState } from "react";
import { db } from "../FireBase/Firebase-config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";


const FireBase = () => {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  // Lấy dữ liệu ban đầu
  useEffect(() => {
    //     getDocs(colRef)
    //       .then((snapshot) => {
    //         let posts = [];
    //         snapshot.docs.forEach((doc) => {
    //           posts.push({
    //             id: doc.id,
    //             ...doc.data(),
    //           });
    //         });
    //         // console.log("All posts:", posts);
    //         setPosts(posts);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //2. get document in realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
       
      setPosts(posts);
    });
  }, []);
  console.log("All posts:", posts);
  // Thêm bài viết
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt:serverTimestamp()
    })
      .then(() => {
        setMessage("✅ Thêm bài viết thành công!");
        setTitle("");
        setAuthor("");
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
      setPostId("");
    } catch (err) {
      setMessage("❌ Xóa thất bại: " + err.message);
    }
  };
// update & add time
  const handleUpdatePost = async(e) =>{
    e.preventDefault();
    const colRefUpdatePost = doc(db, "posts", postId);
    await updateDoc (colRefUpdatePost,{
        title,
        author,
    });
    console.log("update success")
  }

  return (
    <div className=" grid grid-cols-3 grid-rows-2 gap-2 bg-sky-950 w-300 h-200 m-3 p-3">
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
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={author}
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-5 bg-blue-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Form update bài viết */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            value={title}
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={author}
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-5 bg-orange-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Update
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
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="p-5 bg-red-500 text-white text-sm font-medium rounded-lg w-full"
          >
            Remove
          </button>
        </form>
      </div>

      {/* SHOW REAL TIME */}
      <div className="w-full text-xl max-w-xl mx-auto bg-gray-200  shadow-xl p-6  mb-10">
        {posts.length > 0 &&
          posts.map((item) => (
            <div key={item.id}>
              <div>
                {item.title} - {item.author} 
              </div>
            </div>
          ))}
      </div>
          {/* update and show timeline */}
    </div>
  );
};

export default FireBase;
