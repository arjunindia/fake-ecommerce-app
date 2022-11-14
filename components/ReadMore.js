import { useState, useEffect } from "react";
const ReadMore = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  useEffect(() => {
    // This will only be called once the component is mounted inside the browser
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="px-3 text-cyan-500">
        {text.length >= 150 && (isReadMore ? "...read more" : " show less")}
      </span>
    </div>
  );
};
export default ReadMore;
