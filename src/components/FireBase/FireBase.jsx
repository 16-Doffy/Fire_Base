import React, { useEffect, useState } from "react";
import { db } from "../FireBase/Firebase-config";
import { collection, getDocs,addDoc } from "firebase/firestore";

const FireBase = () => {
  const colRef = collection(db, "posts");
const [title,setTitle] = useState('');
const [author,setAuthor] = useState('');
  useEffect(() => {
    //1. get collection
    getDocs(colRef)
      .then((snapshot) => {
        // console.log("getdocs", snapshot);
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        // console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleAddPost =(e)=>{
    e.preventDefault();
    addDoc(colRef,  {
        title,
        author,
    }).then(() => {
        console.log("successful");
        //reset form
    })
    .catch((err) => {
        console.log(err);
    })
  }
  return (
    <div>
      <div className="w-full max-w-500 mx-auto bg-white shadow-lg p-5">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="enter your title"
            name="title"
            onChange={e => setTitle (e.target.value)}
          />

          <input
            type="text"
            className="p-3 border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="enter your author"
            name="author"
            onChange={e => setAuthor (e.target.value)}
          />

          <button type="submit" className="p-5 bg-blue-500 text-white text-sm font-medium rounded-lg w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FireBase;
