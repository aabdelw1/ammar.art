import React from 'react';
import { styled } from '@style';

import Navigation from '@components/Navigation';
import MaxWidthWrapper from '@components/MaxWidthWrapper';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <Navigation />
      </HeaderContent>
    </Wrapper>
  );
};

const Wrapper = styled('header', {
  display: 'flex',
});

const HeaderContent = styled(MaxWidthWrapper, {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '1.5rem',
  paddingBottom: '0.75rem',
  alignItems: 'center',
});


export default Header;