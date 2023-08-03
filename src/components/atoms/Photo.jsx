/**
 * 사진 컴포넌트
 *
 * @param {string} src - 이미지 경로
 * @param {string} alt - 이미지 설명
 * @returns
 */

const Photo = ({ src, alt, className }) => {
  const staticServerUri = process.env.REACT_APP_PATH || "";
  return (
    <picture>
      <source srcSet={`staticServerUri${src}`} />
      <img
        src={`staticServerUri${src}`}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

export default Photo;
