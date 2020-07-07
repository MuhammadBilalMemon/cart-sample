import React from "react";
import "./style.css";

function Cart() {
  return (
    <div className="card">
      <aside>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg"
          alt="any food pic"
        />
      </aside>

      <article>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <span className="far fa-star"></span>
        <h2>Artifitial Intelligence</h2>
        <h3>AI for Everyone and Fundamentals of Programming using Python</h3>
        <ul>
          <li>
            <span className="far fa-user"></span>
            <span>1</span>
          </li>
          <li>
            <span className="far fa-clock"></span>
            <span>15 min</span>
          </li>
          <li>
            <span className="far fa-user"></span>
            <span>Beginner level</span>
          </li>
        </ul>
        <p>
          We will start this course by understand the fundamentals and use cases
          for AI. Then, we'll learn about basic programming concepts using
          Python, such as lists, dictionaries, classes, functions and loops, and
          practice writing clean and readable code with exercises for each
          topic.{" "}
        </p>
        <hr />
      </article>
    </div>
  );
}

export default Cart;
