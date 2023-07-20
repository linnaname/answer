import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { usePageTags } from '@/hooks';
import { WelcomeTitle, PluginRender } from '@/components';
import { guard } from '@/utils';

const Index: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'login' });
  usePageTags({
    title: t('sign_up', { keyPrefix: 'page_title' }),
  });
  if (!guard.singUpAgent().ok) {
    return null;
  }
  return (
    <Container style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
      <WelcomeTitle />
      <Col className="mx-auto" md={6} lg={4} xl={3}>
        <PluginRender type="Connector" className="mb-5" />
      </Col>
    </Container>
  );
};

export default React.memo(Index);
