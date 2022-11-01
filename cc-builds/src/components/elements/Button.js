const Button = ({ copy, url, addClass }) => {
  return (
    <button
      className={`coh-link coh-style-button-action ${addClass}`}
      onClick={(e) => {
        // setWhichStep(whichStep);
        // onStepClick(whichStep);
      }}
      dangerouslySetInnerHTML={{ __html: copy }}
    />
  );
};

export default Button;
