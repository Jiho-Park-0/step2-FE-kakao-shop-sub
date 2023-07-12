import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="my-8 w-full rounded bg-yellow-300 px-4 py-3 font-semibold hover:bg-yellow-400"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func, // 버튼 클릭 이벤트 핸들러
  children: PropTypes.node.isRequired, // 버튼의 자식 요소
};

export default Button;
