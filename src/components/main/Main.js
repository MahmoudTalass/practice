import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-div">
      <img
        src="https://unsplash.it/260/?blur"
        alt="icon"
        className="image-icon"
      />
      <section className='main-section'>
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          sint quo? Accusantium, debitis in veniam ipsa suscipit ducimus soluta
          rem blanditiis obcaecati ea necessitatibus inventore praesentium
          quaerat sit aut laboriosam ratione architecto omnis est maiores!
          Laudantium assumenda delectus modi harum ipsa ratione, doloremque
          suscipit debitis repudiandae similique sequi quas quasi hic inventore
          asperiores vitae laborum porro vel. Nostrum, aut debitis.
        </p>
        <hr />
      </section>
    </div>
  );
};

export default Main;
