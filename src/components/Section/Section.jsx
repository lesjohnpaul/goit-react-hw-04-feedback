import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={css.divSection}>
    <section>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </section>
  </div>
);
