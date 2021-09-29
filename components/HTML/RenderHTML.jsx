const RenderHTML = ({ html, className }) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default RenderHTML;
