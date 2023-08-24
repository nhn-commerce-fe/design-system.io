import classnames from 'classnames';

const MetricsItem = () => {
  return (
    <span className={classnames('metrics__item')}>
      <em className="metrics__num">400+</em>
      <span className="metrics__num-desc">Projects completed</span>
    </span>
  );
};

export const MetricsSection = () => {
  return (
    <section className={classnames('section-wrap', 'metrics')}>
      <div className="metrics__header">
        <h2 className="metrics__tit">NHN커머스와 성장하고 있어요</h2>
        <p className="metrics__desc">Everything you need to build modern UI and great products.</p>
      </div>

      <div className="metrics__content">
        <MetricsItem />
        <MetricsItem />
        <MetricsItem />
      </div>
    </section>
  );
};
