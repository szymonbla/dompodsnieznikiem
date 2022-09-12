import { BaseLayout } from 'layouts';
import { TopWelcome, TopImage } from 'common/components';

export const TopSection = () => {
  return (
    <BaseLayout sx={{ flexDirection: 'column', gap: 2 }}>
      <TopWelcome />
      <TopImage />
    </BaseLayout>
  );
};
