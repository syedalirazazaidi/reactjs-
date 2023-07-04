import React from "react";

export default function ImageRandom() {
  const imageUrls = [
    "https://images.pexels.com/photos/17314386/pexels-photo-17314386/free-photo-of-cat-on-table.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11959684/pexels-photo-11959684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16676444/pexels-photo-16676444/free-photo-of-close-up-of-a-black-and-white-border-collie.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16689170/pexels-photo-16689170/free-photo-of-a-puppy-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16689171/pexels-photo-16689171/free-photo-of-a-puppy-sitting-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16697913/pexels-photo-16697913/free-photo-of-close-up-of-cat-head.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16680727/pexels-photo-16680727/free-photo-of-cat-on-pebbles.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16684647/pexels-photo-16684647/free-photo-of-a-white-poodle-in-a-park-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const [imgmy, setMyImage] = React.useState(
    "https://images.pexels.com/photos/17314386/pexels-photo-17314386/free-photo-of-cat-on-table.jpeg?auto=compress&cs=tinysrgb&w=600"
  );
  const changeImage = (id: number, imageUrl: string) => {
    setMyImage(imageUrl);
  };
  return (
    <>
      <div style={{ padding: "30px" }}>
        <img
          src={imgmy}
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "3px",

            backgroundRepeat: "no-repeat",
          }}
          alt={`Image`}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: " repeat(4, 1fr)",
          gap: "10px",
          gridAutoRows: " minmax(100px, auto)",
        }}
      >
        {imageUrls.map((imageUrl, index) => (
          <img
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "5px",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() => changeImage(index + 1, imageUrl)}
          />
        ))}
      </div>
    </>
  );
}
