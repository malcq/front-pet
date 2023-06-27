import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

export const AdminPanelPage = () => {
  const { t } = useTranslation('admin-panel');

  return (
    <Page>
      {t('adminPage')}
    </Page>
  );
};

export default AdminPanelPage;
