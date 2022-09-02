import { BaseLayout } from 'layouts';
import { TopWelcome, TopImage } from 'common/components';

export const TopSection = () => {
  return (
    <BaseLayout sx={{ flexDirection: 'row', maxWidth: '80%' }}>
      <TopWelcome />
      <TopImage />
    </BaseLayout>
  );
};
