// our-domain.com/news

import Link from 'next/link'

import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/nextjs-is-a-great-framework">NextJs is a great framework</Link></li>
       <li>Something else</li> 
      </ul>
    </Fragment>
  );
}

export default NewsPage;
