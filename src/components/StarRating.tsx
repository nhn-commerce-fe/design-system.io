interface StarRatingProps {
  count: number;
  total: number;
}

export const StarRating = ({ count, total }: StarRatingProps) => {
  const startCount = (count / total) * 100;
  return (
    <span className="star-rating" data-count={count}>
      <span className="a11y">
        별점 {total}개중 {count}개
      </span>
      <span className="star-rating__count" style={{ width: `${startCount}%` }}></span>
    </span>
  );
};
