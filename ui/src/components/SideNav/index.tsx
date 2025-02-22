import { FC } from 'react';
import { Col, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classnames from 'classnames';

import { loggedUserInfoStore, sideNavStore } from '@/stores';
import { Icon } from '@/components';
import './index.scss';

const Index: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { user: userInfo } = loggedUserInfoStore();
  const { visible } = sideNavStore();
  return (
    <Col
      xl={2}
      lg={3}
      md={12}
      className={classnames(
        'position-relative',
        visible ? '' : 'd-none d-lg-block',
      )}
      id="sideNav">
      <div className="nav-wrap pt-4">
        <Nav variant="pills" className="flex-column">
          <NavLink
            to="/questions"
            className={({ isActive }) =>
              isActive || pathname === '/' ? 'nav-link active' : 'nav-link'
            }>
            <Icon name="question-circle-fill" className="me-2" />
            <span>{t('header.nav.question')}</span>
          </NavLink>

          <NavLink to="/tags" className="nav-link">
            <Icon name="tags-fill" className="me-2" />
            <span>{t('header.nav.tag')}</span>
          </NavLink>

          { userInfo?.role_id === 2 ? (
            <>
              <div className="py-2 px-3 mt-3 small fw-bold">
                {t('header.nav.moderation')}
              </div>
             
              {userInfo?.role_id === 2 ? (
                <NavLink to="/admin" className="nav-link">
                  {t('header.nav.admin')}
                </NavLink>
              ) : null}
            </>
          ) : null}
        </Nav>
      </div>
      <div className="side-nav-right-line" />
    </Col>
  );
};

export default Index;
