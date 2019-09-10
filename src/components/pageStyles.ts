import styled from '@emotion/styled';

export const Header = styled.div({
  background: '#543F82',
  height: '100px',
  padding: '0 150px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  fontSize: '40px',
  letterSpacing: '5px',
  color: '#fff'
})

export const PaginationContainer = styled.div`
  justify-content: center;
  display: flex;
  margin: 30px 0;
  .rc-pagination-item{
    background: #543F82;
    border-color: #543F82;
    &:hover a{
      color: #fff
    };
    a {
        color: #c2c2c2
    };
  }
  .rc-pagination-item-active a {
    color: #fff;
  }
`
export const StyledWraperComponent = styled.div({
  margin: '20px 150px',
  height: '100%'
});


export const PageLoader = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: '36px',
  letterSpacing: '20px',
  fontWeight: 500,
  color: '#543F82'
});

export const ContentLoading = styled.div({
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '36px',
  letterSpacing: '8px',
  color: '#543F82'
});
