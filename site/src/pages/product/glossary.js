import React from 'react';

const terms = [
  {
    term: 'Category',
    definition:
      'Categories are used to segment and group freelancers. For example, a team user may wish to create a category of all their approved freelancers that are based in London. Categories are visible to the whole team, however not to the freelancer.',
  },
  {
    term: 'Core attribute',
    definition:
      'A general quality that a team can use to rate a freelancer against, for example ‘culture fit’. See also: Feedback’.',
  },
  {
    term: 'Finance approver',
    definition:
      'A team user with extended permissions, mainly surrounding the approval of invoices.',
  },
  {
    term: 'Freelancer',
    definition:
      'An individual account representing either an individual freelancer, or entity (an agency for example). Freelancers have access to a separate app, and can be listed in multiple teams.',
  },
  {
    term: 'Freelancer approver',
    definition:
      'A team user with extended permissions, with the ability to approve or unapprove freelancers.',
  },
];

const GlossaryPage = () => (
  <div>
    <h1>Product Glossary</h1>
    <p>Commonly used words and phrases used across the Kalo product</p>
    <table>
      <tr>
        <th>Term</th>
        <th>Definition</th>
      </tr>
      {terms.map(({term, definition}) => (
        <tr key={term}>
          <td>{term}</td>
          <td>{definition}</td>
        </tr>
      ))}
    </table>
  </div>
);

export default GlossaryPage;
