const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Button</h1>
      <div className="button-container">
        <button buttonText="Like" className="like-button" />
        <button buttonText="Comment" className="comment-button" />
        <button buttonText="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
