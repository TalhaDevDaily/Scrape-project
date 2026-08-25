const CategoryDetails = ({ category }) => (
  <section className="af-panel af-content af-page__body mt-2">
    <h2>What this category means</h2>
    <p>
      {category.description} Each listing is checked before it is published, and
      the product row shows the delivery state available at the moment you
      browse.
    </p>
    <p>
      The right choice depends on the job: fresh accounts suit testing, while
      older or reviewed profiles are better when campaign downtime costs more
      than the account itself.
    </p>
    <h2>What to look at when choosing</h2>
    <p>
      Pay attention to age, geo, included access, verification status and the
      stock indicator. Contents can differ from one listing to the next, so the
      individual description remains the source of truth.
    </p>
    <p>
      Use a separate browser profile and a stable connection for each account.
      This keeps your setup organized and makes the delivered details easier to
      verify.
    </p>
    <h2>What is included</h2>
    <p>
      Listings may include email access, cookies, tokens, pages, documents,
      two-factor authentication or business assets. The exact bundle is written
      on each product row.
    </p>
    <h2>How delivery works</h2>
    <p>
      Payment is followed by automatic delivery to the customer area. If an item
      is unavailable, use the bell control to request an availability
      notification.
    </p>
  </section>
);
export default CategoryDetails;
