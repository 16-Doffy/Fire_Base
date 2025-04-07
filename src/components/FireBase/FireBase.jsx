import React, { useEffect } from "react";
import { db } from "../FireBase/Firebase-config";
import { collection, getDocs } from "firebase/firestore";


const FireBase = () => {
  const colRef = collection(db, "posts");
  console.log("cc", colRef);
    useEffect(() => {
        //1. get collection
        getDocs(colRef)
        .then((snapshot) => {
            console.log("getdocs",snapshot);
            let posts =[];
            snapshot.docs.forEach((doc)=> {
                posts.push({
                    id: doc.id,
                    ...doc.data(),
                });
            })
            console.log(posts);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
  return <div>dsadsad</div>;
};

export default FireBase;
