import React from 'react';

import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li><FaInbox></FaInbox><span>Inbox</span></li>
      <li><FaRegCalendar></FaRegCalendar><span>Today</span></li>
      <li><FaRegCalendarAlt></FaRegCalendarAlt>Next 7 days</li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">Projects will come here</ul>

    Add project component here!!
  </div>
);

