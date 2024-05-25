import starUrl from "../assets/icons/star.svg";
import halfStarUrl from "../assets/icons/star-half.svg";
import emptyStarUrl from "../assets/icons/star-empty.svg";

export type StarRatingProps = {
  rate: number;
  max?: number;
};

export default function StarRating(props: StarRatingProps) {
  const { rate, max = 5 } = props;

  return (
    <tr>
      {Array(Math.floor(rate))
        .fill(0)
        .map((_, i) => (
          <td>
            <img src={starUrl} key={i} />
          </td>
        ))}
      {Math.floor(rate) != rate && (
        <td>
          <img src={halfStarUrl} />
        </td>
      )}
      {Array(Math.floor(max - rate))
        .fill(0)
        .map((_, i) => (
          <td>
            <img src={emptyStarUrl} key={i} />
          </td>
        ))}
    </tr>
  );
}
