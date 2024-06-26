import css from './Statistics.module.css';
import { RiEmotionHappyFill } from 'react-icons/ri';
import { MdOutlineSentimentNeutral } from 'react-icons/md';
import { FaSadTear } from 'react-icons/fa';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.divStatistics}>
      <p className={css.labelStat}>
        <RiEmotionHappyFill className={`${css.icons} ${css.happyIcon}`} /> Good:
        <span className={css.value}> {good}</span>
      </p>
      <p className={css.labelStat}>
        <MdOutlineSentimentNeutral
          className={`${css.icons} ${css.neutralIcon}`}
        />{' '}
        Neutral:
        <span className={css.value}> {neutral}</span>
      </p>
      <p className={css.labelStat}>
        <FaSadTear className={`${css.icons} ${css.sadIcon}`} /> Bad:
        <span className={css.value}> {bad}</span>
      </p>
      <p className={css.labelStat}>
        Total:
        <span className={css.value}> {total}</span>
      </p>
      <p className={css.labelStat}>
        Positive Feedback:
        <span className={css.valuePercentage}> {positivePercentage}%</span>
      </p>
    </div>
  );
};
