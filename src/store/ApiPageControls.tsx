import { nextPage, previousPage } from "./api/actions";
import { selectApiPage } from "./api/selectors";
import { useAppDispatch, useAppSelector } from "./hooks";

const ApiPageControls = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectApiPage);

  return (
    <section className="state-panel">
      <div>
        <h2>Redux API parameter</h2>
        <p>Both API examples use page {page}.</p>
      </div>
      <div className="state-panel-actions">
        <button
          type="button"
          onClick={() => dispatch(previousPage())}
          disabled={page === 1}
        >
          Previous page
        </button>
        <button type="button" onClick={() => dispatch(nextPage())}>
          Next page
        </button>
      </div>
    </section>
  );
};

export default ApiPageControls;