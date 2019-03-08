/* @flow */
import React from 'react';

import Avatar from '../../avatar';
import AvatarGroup from '../avatar-group';

export const examples = [
  {
    title: 'Grouped Avatars',
    render: () => (
      <AvatarGroup>
        <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
      </AvatarGroup>
    ),
    html: () => (
      <div className="ui-avatar-group">
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-orange"
          data-fallback-initials="AC"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span className="ui-avatar__avatar" />
        </span>
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-pink"
          data-fallback-initials="PJ"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span className="ui-avatar__avatar" />
        </span>
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-green"
          data-fallback-initials="CL"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span className="ui-avatar__avatar" />
        </span>
      </div>
    ),
  },
  {
    title: 'Grouped avatars with an overflow',
    description:
      'By default, only five avatars should be displayed. The total number of remaining avatars that are not shown is shown in a chip next to the avatars.',
    render: () => (
      <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
    ),
    html: () => (
      <div className="ui-avatar-group">
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-orange"
          data-fallback-initials="AC"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span className="ui-avatar__avatar" />
        </span>
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-pink"
          data-fallback-initials="PJ"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span className="ui-avatar__avatar" />
        </span>
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-green"
          data-fallback-initials="CL"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span className="ui-avatar__avatar" />
        </span>
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-blue"
          data-fallback-initials="PJ"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span className="ui-avatar__avatar" />
        </span>
        <span
          className="ui-avatar ui-avatar--medium ui-avatar--fallback-orange"
          data-fallback-initials="MF"
          aria-label="Mary Freelancer"
          role="img"
        >
          <span
            className="ui-avatar__avatar"
            style={{
              backgroundImage:
                'url(https://randomuser.me/api/portraits/women/21.jpg)',
            }}
          />
        </span>
        <span className="ui-avatar--medium ui-avatar-group__chip">3</span>
      </div>
    ),
  },
];
