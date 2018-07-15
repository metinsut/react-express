import styled from 'styled-components';

export const Section = styled.div``;
export const Root = styled.div``;
export const Wrapper = styled.div`
`;
export const Container = styled.div`
     padding: 10px;
`;
export const Row = styled.div`
     border: 1px solid gray;
     display:flex;
     flex-wrap:wrap;
     &:nth-child(odd) {
          background-color:white;
     }
`;
export const Self = styled.div`
     padding: 5px 10px;
     display: flex;
     flex-direction:column;
`;

export const P1 = styled.p`
     color: #989898;
     font-weight:bold;
`;

export const P2 = styled.p`
     color: #4a4a4a;
`;
export const Image = styled.img`
     width: 100px;
     height: 100px;
     object-fit: cover;
`;
