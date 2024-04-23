import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.divFeedback}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={css.btnOption}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
