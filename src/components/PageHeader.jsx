import React from 'react';
import Breadcrumb from './Breadcrumb';
import './PageHeader.css';

export default function PageHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  description,
  breadcrumbs = [],
  children
}) {
  return (
    <div className="page-header-wrapper">
      {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}

      <div className="page-header-content">
        {badge && (
          <div className="page-header-badge">
            {BadgeIcon && <BadgeIcon size={14} className="page-badge-icon" />}
            <span>{badge}</span>
          </div>
        )}

        <h1 className="page-header-title">{title}</h1>

        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}

        {description && <p className="page-header-description">{description}</p>}

        {children && <div className="page-header-actions">{children}</div>}
      </div>
    </div>
  );
}
