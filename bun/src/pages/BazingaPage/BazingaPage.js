import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const BazingaPage = () => {
  return <>
      <MetaTags title="Bazinga" // description="Bazinga description"

    /* you should un-comment description and add a unique description, 155 characters or less
    You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
    />

      <h1>BazingaPage</h1>
      <p>
        Find me in <code>./web/src/pages/BazingaPage/BazingaPage.js</code>
      </p>
      <p>
        My default route is named <code>bazinga</code>, link to me with `
        <Link to={routes.bazinga()}>Bazinga</Link>`
      </p>
    </>;
};

export default BazingaPage;