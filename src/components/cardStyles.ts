import styled from '@emotion/styled';

interface Price {
  isLineThrough?: boolean;
  smallText?: boolean;
}

export const CardContainer = styled.div({
  background: '#fff',
  width: 'calc(100%/5)',
  minHeight: '300px',
  borderRadius: '6px',
  border: '1px solid #E1E2E2',
  display: 'inline-block',
  margin: '12px'
});

export const CardHeader = styled.p({
  color: '#543F82',
  borderBottom: '1px solid #E1E2E2',
  padding: '18px',
  fontSize: '16px',
  letterSpacing: '1.16px',
  fontWeight: 'bold',
  margin: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export const Container = styled.div({
  padding: '14px 14px 0'
});

export const Tags = styled.span({
  background: '#ff5001',
  color: '#fff',
  borderRadius: '20px',
  padding: '4px 10px',
  margin: '4px'
});

export const SmallText = styled.span({
  color: '#68605D',
  fontSize: '16px',
  margin: '12px'
});

export const PriceText = styled.span<Price>(
  {
    color: '#68605D',
    fontSize: '24px'
  },
  ({ isLineThrough, smallText }) => {
    if (isLineThrough) {
      return {
        textDecoration: 'line-through',
        margin: '10px'
      };
    }
    if (smallText) {
      return {
        fontSize: '24px'
      };
    }
  }
);
